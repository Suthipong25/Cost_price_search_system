(() => {
  const data = window.VEHICLE_COST_DATA;
  if (!data) throw new Error("Vehicle cost data was not loaded.");

  const percentages = [0.1, 0.12, 0.15, 0.18, 0.21, 0.24, 0.27, 0.3];
  const elements = {
    form: document.querySelector("#lookup-form"),
    from: document.querySelector("#from-input"),
    to: document.querySelector("#to-input"),
    vehicle: document.querySelector("#vehicle-input"),
    search: document.querySelector("#search-button"),
    message: document.querySelector("#form-message"),
    summary: document.querySelector("#result-summary"),
    resultBody: document.querySelector("#result-body"),
    copy: document.querySelector("#copy-button"),
    toast: document.querySelector("#toast"),
  };

  const canonical = (value) =>
    (value || "").trim().replace(/\s+/g, " ").toLocaleUpperCase("th-TH");
  const formatMoney = new Intl.NumberFormat("th-TH", {
    maximumFractionDigits: 0,
  });
  const vehicleOrder = new Map(
    data.vehicleTypes.map((type, index) => [type, index]),
  );

  let currentRows = [];
  let toastTimer;

  const exactValue = (value, candidates) =>
    candidates.find((candidate) => canonical(candidate) === canonical(value));

  const setSelectOptions = (target, placeholder, values) => {
    if (!target) return;
    const selected = exactValue(target.value, values) ?? "";
    target.replaceChildren(
      new Option(placeholder, ""),
      ...values.map((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        return option;
      }),
    );
    target.value = selected;
  };

  const routesForFrom = (from) =>
    data.routes.filter((route) => canonical(route.from) === canonical(from));

  const routesForPair = (from, to) =>
    routesForFrom(from).filter(
      (route) => canonical(route.to) === canonical(to),
    );

  function updateFrom() {
    const from = exactValue(elements.from.value, data.fromValues);
    const toValues = from
      ? [...new Set(routesForFrom(from).map((route) => route.to))].sort(
          (a, b) => a.localeCompare(b, "th"),
        )
      : [];

    elements.to.value = "";
    setSelectOptions(elements.to, "เลือกปลายทาง", toValues);
    elements.to.disabled = !from;
    updateTo();
  }

  function updateTo() {
    const from = exactValue(elements.from.value, data.fromValues);
    const toCandidates = from
      ? [...new Set(routesForFrom(from).map((route) => route.to))]
      : [];
    const to = exactValue(elements.to.value, toCandidates);

    if (elements.vehicle) {
      if (from && to) {
        const matchingRoutes = routesForPair(from, to);
        const availableVehicles = [
          ...new Set(matchingRoutes.map((r) => r.vehicleType)),
        ].sort((a, b) => (vehicleOrder.get(a) ?? 999) - (vehicleOrder.get(b) ?? 999));
        setSelectOptions(
          elements.vehicle,
          "ทุกประเภทรถ (ทั้งหมด)",
          availableVehicles,
        );
        elements.vehicle.disabled = false;
      } else {
        elements.vehicle.replaceChildren(
          new Option("ทุกประเภทรถ (ทั้งหมด)", ""),
        );
        elements.vehicle.disabled = true;
      }
    }

    updateReadyState();

    if (from && to) {
      search();
    } else {
      elements.resultBody.innerHTML =
        '<tr class="empty-row"><td colspan="17">เลือกต้นทางและปลายทางเพื่อดูราคา</td></tr>';
      elements.summary.textContent = "เลือกต้นทางและปลายทางเพื่อดูราคา";
      elements.copy.disabled = true;
      currentRows = [];
    }
  }

  function updateReadyState() {
    const fromValid = Boolean(exactValue(elements.from.value, data.fromValues));
    const toCandidates = fromValid
      ? [...new Set(routesForFrom(elements.from.value).map((route) => route.to))]
      : [];
    const toValid = Boolean(exactValue(elements.to.value, toCandidates));
    const ready = fromValid && toValid;

    elements.search.disabled = !ready;
    elements.message.textContent = "";
    for (const field of [elements.from, elements.to, elements.vehicle].filter(Boolean)) {
      field.removeAttribute("aria-invalid");
    }
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    toastTimer = setTimeout(
      () => elements.toast.classList.remove("is-visible"),
      2600,
    );
  }

  function renderMissing(from, to, vehicle) {
    currentRows = [];
    elements.copy.disabled = true;
    const filterDesc = vehicle ? ` ประเภทรถ: ${vehicle}` : "";
    elements.summary.textContent = `${from} → ${to}${filterDesc}`;
    elements.resultBody.innerHTML = `<tr class="missing-row"><td colspan="17">ไม่พบราคาสำหรับเส้นทาง ${from} → ${to}${filterDesc} กรุณาเลือกเงื่อนไขใหม่</td></tr>`;
  }

  function renderResults(rows, from, to, selectedVehicle, vehicleCount) {
    currentRows = rows;
    elements.copy.disabled = false;

    const vehicleText = selectedVehicle
      ? ` · ประเภทรถ: ${selectedVehicle}`
      : ` (${vehicleCount} ประเภทรถ)`;
    elements.summary.textContent = `พบ ${rows.length} รายการราคา${vehicleText} · ${from} → ${to}`;

    elements.resultBody.replaceChildren();
    rows.forEach((row) => {
      const tr = document.createElement("tr");
      tr.className = "result-row";

      const prices = percentages.map((p) => Math.round(row.cost * (1 + p)));

      // 1. FROM
      const tdFrom = document.createElement("td");
      tdFrom.textContent = row.from;

      const detailCells = [row.receive, row.toProvince, row.toCity, row.toLocation, row.send].map((value) => {
        const td = document.createElement("td");
        td.textContent = value || "—";
        return td;
      });

      // 3. ประเภทรถ
      const tdVehicle = document.createElement("td");
      tdVehicle.textContent = row.vehicleType;

      // 4. บริษัท
      const tdCompany = document.createElement("td");
      tdCompany.textContent = row.company;

      // 5. ราคาต้นทุน
      const tdCost = document.createElement("td");
      tdCost.textContent = formatMoney.format(row.cost);
      if (row.isMin) {
        const badge = document.createElement("span");
        badge.className = "badge-lowest";
        badge.textContent = "ต่ำสุด";
        badge.title = "ราคาต่ำสุดของประเภทรถนี้";
        tdCost.append(badge);
      }

      tr.append(tdFrom, ...detailCells, tdVehicle, tdCompany, tdCost);

      // 6..13 ราคาบวกเปอร์เซ็นต์ (10% - 30%)
      prices.forEach((price) => {
        const tdPrice = document.createElement("td");
        tdPrice.textContent = formatMoney.format(price);
        tr.append(tdPrice);
      });

      elements.resultBody.append(tr);
    });
  }

  function search() {
    const from = exactValue(elements.from.value, data.fromValues);
    const toCandidates = from
      ? [...new Set(routesForFrom(from).map((route) => route.to))]
      : [];
    const to = exactValue(elements.to.value, toCandidates);
    const selectedVehicle = elements.vehicle ? elements.vehicle.value : "";

    const invalid = [];
    if (!from) invalid.push(elements.from);
    if (!to) invalid.push(elements.to);
    if (invalid.length) {
      invalid.forEach((field) => field.setAttribute("aria-invalid", "true"));
      elements.message.textContent = "กรุณาเลือก FROM และ TO ให้ครบถ้วน";
      invalid[0].focus();
      return;
    }

    let matchedRoutes = routesForPair(from, to);
    const totalVehicleCount = matchedRoutes.length;

    if (selectedVehicle) {
      matchedRoutes = matchedRoutes.filter(
        (r) => canonical(r.vehicleType) === canonical(selectedVehicle),
      );
    }

    const rows = [];
    matchedRoutes.forEach((route) => {
      route.offers.forEach((offer) => {
        rows.push({
          from: route.from,
          to: route.to,
          vehicleType: route.vehicleType,
          company: offer.company,
          cost: offer.cost,
          receive: offer.receive,
          toProvince: offer.toProvince,
          toCity: offer.toCity,
          toLocation: offer.toLocation,
          send: offer.send,
          isMin: offer.cost === route.minCost,
          vehicleOrder: vehicleOrder.get(route.vehicleType) ?? 999,
        });
      });
    });

    rows.sort((a, b) => {
      if (a.vehicleOrder !== b.vehicleOrder) return a.vehicleOrder - b.vehicleOrder;
      if (a.cost !== b.cost) return a.cost - b.cost;
      return a.company.localeCompare(b.company, "th");
    });

    if (rows.length === 0) {
      renderMissing(from, to, selectedVehicle);
    } else {
      renderResults(
        rows,
        from,
        to,
        selectedVehicle,
        selectedVehicle ? 1 : totalVehicleCount,
      );
    }
  }

  // Event Listeners
  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    search();
  });

  elements.from.addEventListener("change", updateFrom);
  elements.to.addEventListener("change", updateTo);

  if (elements.vehicle) {
    elements.vehicle.addEventListener("change", () => {
      if (elements.from.value && elements.to.value) {
        search();
      }
    });
  }

  elements.copy.addEventListener("click", async () => {
    if (!currentRows || !currentRows.length) return;
    const headers = [
      "FROM",
      "รับ",
      "To province",
      "To City",
      "To location",
      "ส่ง",
      "ประเภทรถ",
      "บริษัท",
      "ราคาต้นทุน",
      "10%",
      "12%",
      "15%",
      "18%",
      "21%",
      "24%",
      "27%",
      "30%",
    ];
    const lines = [headers.join("\t")];
    currentRows.forEach((row) => {
      const prices = percentages.map((p) => Math.round(row.cost * (1 + p)));
      lines.push(
        [
          row.from,
          row.receive || "",
          row.toProvince || "",
          row.toCity || "",
          row.toLocation || "",
          row.send || "",
          row.vehicleType,
          row.company,
          row.cost,
          ...prices,
        ].join("\t"),
      );
    });

    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      showToast(
        `คัดลอกตาราง ${currentRows.length} รายการแล้ว (สามารถวางลงใน Excel ได้ทันที)`,
      );
    } catch {
      showToast("ไม่สามารถคัดลอกได้ กรุณาลองใหม่อีกครั้ง");
    }
  });

  // Initial population
  setSelectOptions(elements.from, "เลือกต้นทาง", data.fromValues);

  const preferredFrom =
    exactValue("Air BKK", data.fromValues) ?? data.fromValues[0];
  if (preferredFrom) {
    elements.from.value = preferredFrom;
    updateFrom();

    const availableTo = [
      ...new Set(routesForFrom(preferredFrom).map((route) => route.to)),
    ];
    const preferredTo = exactValue("WUS", availableTo) ?? availableTo[0];
    if (preferredTo) {
      elements.to.value = preferredTo;
      updateTo();
    }
  }
})();
