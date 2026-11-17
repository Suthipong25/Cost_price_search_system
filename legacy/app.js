(() => {
  const data = window.VEHICLE_COST_DATA;
  if (!data) throw new Error("Vehicle cost data was not loaded.");

  const percentages = [0.1, 0.12, 0.15, 0.18, 0.21, 0.24, 0.27, 0.3];
  const canonical = (value) =>
    (value || "").trim().replace(/\s+/g, " ").toLocaleUpperCase("th-TH");
  const elements = {
    form: document.querySelector("#lookup-form"),
    from: document.querySelector("#from-input"),
    fromSuggestions: document.querySelector("#from-suggestions"),
    to: document.querySelector("#to-input"),
    toSuggestions: document.querySelector("#to-suggestions"),
    province: document.querySelector("#province-input"),
    provinceSuggestions: document.querySelector("#province-suggestions"),
    vehicle: document.querySelector("#vehicle-input"),
    search: document.querySelector("#search-button"),
    message: document.querySelector("#form-message"),
    summary: document.querySelector("#result-summary"),
    resultBody: document.querySelector("#result-body"),
    copy: document.querySelector("#copy-button"),
    toast: document.querySelector("#toast"),
    addButton: document.querySelector("#add-data-button"),
    addDialog: document.querySelector("#add-data-dialog"),
    addForm: document.querySelector("#add-data-form"),
    addError: document.querySelector("#add-data-error"),
    dialogFrom: document.querySelector('#add-data-form [name="from"]'),
    dialogTo: document.querySelector('#add-data-form [name="to"]'),
    dialogFromList: document.querySelector("#dialog-from-options"),
    dialogToList: document.querySelector("#dialog-to-options"),
    dialogProvinceList: document.querySelector("#dialog-province-options"),
    editDialog: document.querySelector("#edit-cost-dialog"),
    editForm: document.querySelector("#edit-cost-form"),
    editInput: document.querySelector("#edit-cost-input"),
    editHint: document.querySelector("#edit-cost-hint"),
    editError: document.querySelector("#edit-cost-error"),
    editRouteText: document.querySelector("#edit-route-text"),
    editVehicleCompanyText: document.querySelector("#edit-vehicle-company-text"),
    closeEditDialog: document.querySelector("#close-edit-dialog"),
    cancelEditButton: document.querySelector("#cancel-edit-button"),
    revertCostButton: document.querySelector("#revert-cost-button"),
    importExcelBtn: document.querySelector("#import-excel-button"),
    exportExcelBtn: document.querySelector("#export-excel-button"),
    excelFileInput: document.querySelector("#excel-file-input"),
    dataMetaInfo: document.querySelector("#data-meta-info"),
  };

  const importedDataKey = "vehicle-cost-imported-data-v1";
  try {
    const cachedData = JSON.parse(localStorage.getItem(importedDataKey) || "null");
    if (cachedData && Array.isArray(cachedData.routes) && cachedData.routes.length) {
      data.routes = cachedData.routes;
      data.fromValues = cachedData.fromValues;
      data.vehicleTypes = cachedData.vehicleTypes;
      if (cachedData.sourceMeta) data.sourceMeta = cachedData.sourceMeta;
    }
  } catch { /* Ignore cache error */ }

  const updateMetaDisplay = () => {
    if (!elements.dataMetaInfo) return;
    const meta = data.sourceMeta || {};
    const dateStr = meta.generatedAt
      ? new Date(meta.generatedAt).toLocaleString("th-TH", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      : "";
    elements.dataMetaInfo.textContent = `ข้อมูลล่าสุด: ${meta.workbook || "2026.10.03 ราคาต้นทุนรถ.xlsx"} ${dateStr ? `(${dateStr})` : ""} · ${data.routes.length} เส้นทาง`;
  };

  const refreshRouteMin = (route) => {
    if (!route || !Array.isArray(route.offers) || !route.offers.length) return;
    let minOffer = route.offers[0];
    for (const offer of route.offers) {
      if (offer.cost < minOffer.cost) {
        minOffer = offer;
      }
    }
    route.minCost = minOffer.cost;
    route.minCompany = minOffer.company;
  };

  const priceOverridesKey = "vehicle-cost-price-overrides-v1";
  const savedDataKey = "vehicle-cost-added-routes-v1";

  // Assign deterministic ID and baseline cost to all static workbook offers
  data.routes.forEach((route, rIndex) => {
    route.offers.forEach((offer, oIndex) => {
      offer.id = `orig-${rIndex}-${oIndex}`;
      offer.originalCost = offer.cost;
      offer.isEdited = false;
    });
  });

  try {
    const savedRoutes = JSON.parse(localStorage.getItem(savedDataKey) || "[]");
    if (Array.isArray(savedRoutes)) {
      savedRoutes.forEach((route, rIdx) => {
        if (!route || !route.from || !route.to || !route.vehicleType || !Array.isArray(route.offers)) return;
        route.offers.forEach((offer, oIdx) => {
          if (!offer.id) offer.id = `saved-${rIdx}-${oIdx}`;
          if (offer.originalCost == null) offer.originalCost = offer.cost;
          if (offer.isEdited == null) offer.isEdited = false;
        });
        const existing = data.routes.find(
          (item) =>
            canonical(item.from) === canonical(route.from) &&
            canonical(item.to) === canonical(route.to) &&
            canonical(item.vehicleType) === canonical(route.vehicleType)
        );
        if (existing) {
          route.offers.forEach((offer) => existing.offers.push(offer));
          refreshRouteMin(existing);
        } else {
          refreshRouteMin(route);
          data.routes.push(route);
        }
        if (!data.vehicleTypes.some((value) => canonical(value) === canonical(route.vehicleType))) {
          data.vehicleTypes.push(route.vehicleType);
        }
        if (!data.fromValues.some((value) => canonical(value) === canonical(route.from))) {
          data.fromValues.push(route.from);
        }
      });
    }
  } catch { /* Ignore invalid saved data and keep workbook data available. */ }

  // Apply user-modified prices
  try {
    const priceOverrides = JSON.parse(localStorage.getItem(priceOverridesKey) || "{}");
    if (priceOverrides && typeof priceOverrides === "object") {
      data.routes.forEach((route) => {
        let changed = false;
        route.offers.forEach((offer) => {
          if (offer.id && priceOverrides[offer.id] && Number.isFinite(priceOverrides[offer.id].cost)) {
            offer.cost = priceOverrides[offer.id].cost;
            offer.isEdited = (offer.originalCost != null && offer.cost !== offer.originalCost);
            changed = true;
          }
        });
        if (changed) {
          refreshRouteMin(route);
        }
      });
    }
  } catch { /* Ignore invalid price overrides */ }

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

  const containsValue = (value, query) =>
    !canonical(query) || canonical(value).includes(canonical(query));

  const uniqueSorted = (values) => {
    const seen = new Set();
    return values
      .filter(Boolean)
      .map((value) => value.trim())
      .filter((value) => {
        const key = canonical(value);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => a.localeCompare(b, "th"));
  };

  const provinceThaiNames = new Map([
    ["AYUTTHAYA", "พระนครศรีอยุธยา"],
    ["BKK", "กรุงเทพมหานคร"],
    ["BANGKOK", "กรุงเทพมหานคร"],
    ["BURIRUM", "บุรีรัมย์"],
    ["CHACHOENGSAO", "ฉะเชิงเทรา"],
    ["CHEV CHONBURI", "ชลบุรี"],
    ["CHON BURI", "ชลบุรี"],
    ["CHONBURI", "ชลบุรี"],
    ["CHIANG MAI", "เชียงใหม่"],
    ["KHON KAEN", "ขอนแก่น"],
    ["KRABI", "กระบี่"],
    ["MAE HONG SON", "แม่ฮ่องสอน"],
    ["NAKHON PATHOM", "นครปฐม"],
    ["NAKHON RATCHASIMA", "นครราชสีมา"],
    ["NAKHON SAWAN", "นครสวรรค์"],
    ["NONTHABURI", "นนทบุรี"],
    ["PATHUM THANI", "ปทุมธานี"],
    ["PATHUMTHANI", "ปทุมธานี"],
    ["PHRAE", "แพร่"],
    ["PHUKET", "ภูเก็ต"],
    ["PRACHINBURI", "ปราจีนบุรี"],
    ["RATCHABURI", "ราชบุรี"],
    ["RAYONG", "ระยอง"],
    ["SAMUT PRAKAN", "สมุทรปราการ"],
    ["SAMUT SAKHON", "สมุทรสาคร"],
    ["SAMUT SAKORN", "สมุทรสาคร"],
    ["SARABURI", "สระบุรี"],
    ["SONGKLA", "สงขลา"],
    ["UDON THANI", "อุดรธานี"],
  ]);

  const provinceThaiName = (value) => provinceThaiNames.get(canonical(value)) || "";

  const matchesProvinceValue = (value, query) =>
    containsValue(value, query) || containsValue(provinceThaiName(value), query);

  const allProvinceValues = () =>
    uniqueSorted(
      data.routes.flatMap((route) =>
        route.offers.map((offer) => offer.toProvince),
      ),
    );

  const allToValues = () => uniqueSorted(data.routes.map((route) => route.to));

  const setDatalistOptions = (target, values) => {
    if (!target) return;
    target.replaceChildren(
      ...values.map((value) => {
        const option = document.createElement("option");
        option.value = value;
        return option;
      }),
    );
  };

  const setProvinceDatalistOptions = (target, values) => {
    if (!target) return;
    target.replaceChildren(
      ...values.map((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.label = provinceThaiName(value);
        return option;
      }),
    );
  };

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

  const routeMatchesProvince = (route, provinceTerm) =>
    route.offers.some((offer) =>
      matchesProvinceValue(offer.toProvince || "", provinceTerm),
    );

  const getFilteredRoutes = (from, toTerm, provinceTerm) =>
    routesForFrom(from).filter(
      (route) =>
        containsValue(route.to, toTerm) &&
        (!provinceTerm || routeMatchesProvince(route, provinceTerm)),
    );

  const autocompleteControls = [];

  const closeAutocomplete = (input, list) => {
    list.hidden = true;
    list.replaceChildren();
    input.setAttribute("aria-expanded", "false");
    input.removeAttribute("aria-activedescendant");
    list.dataset.activeIndex = "-1";
  };

  const closeOtherAutocompletes = (currentInput) => {
    autocompleteControls.forEach(({ input, list }) => {
      if (input !== currentInput) closeAutocomplete(input, list);
    });
  };

  const renderAutocomplete = (input, list, values, isProvince, showAll = false) => {
    if (input.disabled) {
      closeAutocomplete(input, list);
      return;
    }

    const query = showAll ? "" : input.value.trim();
    const matches = values
      .filter((value) =>
        isProvince
          ? matchesProvinceValue(value, query)
          : containsValue(value, query),
      )
      .slice(0, 40);

    list.replaceChildren();
    list.dataset.activeIndex = "-1";

    if (!matches.length) {
      const empty = document.createElement("li");
      empty.className = "autocomplete-empty";
      empty.textContent = "ไม่พบข้อมูลที่ตรงกับคำค้น";
      list.append(empty);
    } else {
      matches.forEach((value, index) => {
        const option = document.createElement("li");
        option.id = `${input.id}-option-${index}`;
        option.className = "autocomplete-option";
        option.role = "option";
        option.dataset.value = value;
        option.setAttribute("aria-selected", "false");

        const primary = document.createElement("span");
        primary.className = "autocomplete-primary";
        primary.textContent = value;
        option.append(primary);

        const thaiName = isProvince ? provinceThaiName(value) : "";
        if (thaiName) {
          const secondary = document.createElement("span");
          secondary.className = "autocomplete-secondary";
          secondary.textContent = thaiName;
          option.append(secondary);
        }
        list.append(option);
      });
    }

    list.hidden = false;
    input.setAttribute("aria-expanded", "true");
  };

  const setActiveAutocompleteOption = (input, list, nextIndex) => {
    const options = [...list.querySelectorAll(".autocomplete-option")];
    if (!options.length) return;
    const index = (nextIndex + options.length) % options.length;
    options.forEach((option, optionIndex) => {
      const active = optionIndex === index;
      option.classList.toggle("is-active", active);
      option.setAttribute("aria-selected", String(active));
    });
    list.dataset.activeIndex = String(index);
    input.setAttribute("aria-activedescendant", options[index].id);
    options[index].scrollIntoView({ block: "nearest" });
  };

  const setupAutocomplete = (input, list, getValues, isProvince = false) => {
    const show = (showAll = false) => {
      closeOtherAutocompletes(input);
      renderAutocomplete(input, list, getValues(), isProvince, showAll);
    };

    const selectValue = (value) => {
      input.value = value;
      input.dispatchEvent(new Event("input", { bubbles: true }));
      input.dispatchEvent(new Event("change", { bubbles: true }));
      closeAutocomplete(input, list);
    };

    autocompleteControls.push({ input, list });
    input.addEventListener("focus", () => show(true));
    input.addEventListener("click", () => show(true));
    input.addEventListener("input", () => show(false));
    input.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        if (list.hidden) show(true);
        const currentIndex = Number(list.dataset.activeIndex || -1);
        setActiveAutocompleteOption(
          input,
          list,
          currentIndex + (event.key === "ArrowDown" ? 1 : -1),
        );
      } else if (event.key === "Enter" && !list.hidden) {
        const active = list.querySelector(".autocomplete-option.is-active");
        if (active) {
          event.preventDefault();
          selectValue(active.dataset.value);
        }
      } else if (event.key === "Escape") {
        closeAutocomplete(input, list);
      } else if (event.key === "Tab") {
        closeAutocomplete(input, list);
      }
    });

    list.addEventListener("pointerdown", (event) => {
      const option = event.target.closest(".autocomplete-option");
      if (!option) return;
      event.preventDefault();
      selectValue(option.dataset.value);
      input.focus();
    });
  };

  const resetResults = (message = "เลือกต้นทางเพื่อดูข้อมูลทุกปลายทาง") => {
    elements.resultBody.innerHTML = `<tr class="empty-row"><td colspan="17">${message}</td></tr>`;
    elements.summary.textContent = message;
    elements.copy.disabled = true;
    currentRows = [];
  };

  let activeFrom = "";

  function updateFrom() {
    const from = exactValue(elements.from.value, data.fromValues);
    if (canonical(from) !== canonical(activeFrom)) {
      elements.to.value = "";
      elements.province.value = "";
      activeFrom = from || "";
    }

    elements.to.disabled = !from;
    elements.province.disabled = !from;
    updateFilters();
  }

  function updateFilters() {
    const from = exactValue(elements.from.value, data.fromValues);
    const toTerm = elements.to.value.trim();
    const provinceTerm = elements.province.value.trim();
    const matchingRoutes = from
      ? getFilteredRoutes(from, toTerm, provinceTerm)
      : [];

    if (elements.vehicle) {
      if (from && matchingRoutes.length) {
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

    if (from) {
      search();
    } else {
      resetResults();
    }
  }

  function updateReadyState() {
    const fromValid = Boolean(exactValue(elements.from.value, data.fromValues));
    const ready = fromValid;

    elements.search.disabled = !ready;
    elements.message.textContent = "";
    for (const field of [elements.from, elements.to, elements.province, elements.vehicle].filter(Boolean)) {
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

  function describeFilters(from, toTerm, provinceTerm, vehicle) {
    const parts = [from];
    if (toTerm) parts.push(`ปลายทาง: ${toTerm}`);
    if (provinceTerm) parts.push(`จังหวัด: ${provinceTerm}`);
    if (vehicle) parts.push(`ประเภทรถ: ${vehicle}`);
    return parts.join(" · ");
  }

  function renderMissing(from, toTerm, provinceTerm, vehicle) {
    currentRows = [];
    elements.copy.disabled = true;
    const description = describeFilters(from, toTerm, provinceTerm, vehicle);
    elements.summary.textContent = description;
    const tr = document.createElement("tr");
    tr.className = "missing-row";
    const td = document.createElement("td");
    td.colSpan = 17;
    td.textContent = `ไม่พบราคาสำหรับ ${description} ลองพิมพ์คำค้นให้สั้นลงหรือเลือกจากรายการ`;
    tr.append(td);
    elements.resultBody.replaceChildren(tr);
  }

  function renderResults(rows, from, toTerm, provinceTerm, selectedVehicle, vehicleCount) {
    currentRows = rows;
    elements.copy.disabled = false;

    const vehicleText = selectedVehicle
      ? ` · ประเภทรถ: ${selectedVehicle}`
      : ` (${vehicleCount} ประเภทรถ)`;
    const filterText = describeFilters(from, toTerm, provinceTerm, "");
    elements.summary.textContent = `พบ ${rows.length} รายการราคา${vehicleText} · ${filterText}`;

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
      tdCost.className = "cost-cell";

      const costWrap = document.createElement("div");
      costWrap.className = "cost-display";

      const costAmount = document.createElement("span");
      costAmount.textContent = formatMoney.format(row.cost);
      costWrap.append(costAmount);

      if (row.isMin) {
        const badge = document.createElement("span");
        badge.className = "badge-lowest";
        badge.textContent = "ต่ำสุด";
        badge.title = "ราคาต่ำสุดของประเภทรถนี้";
        costWrap.append(badge);
      }

      if (row.isEdited) {
        const editedBadge = document.createElement("span");
        editedBadge.className = "badge-edited";
        editedBadge.textContent = "แก้ไขแล้ว";
        editedBadge.title = `แก้ไขจากราคาเดิม: ${formatMoney.format(row.originalCost)} บาท`;
        costWrap.append(editedBadge);
      }

      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.className = "edit-cost-btn";
      editBtn.title = `แก้ไขราคา ${row.company}`;
      editBtn.setAttribute(
        "aria-label",
        `แก้ไขราคา ${row.company} (${row.vehicleType}) เส้นทาง ${row.from} ไป ${row.to} ปัจจุบัน ${formatMoney.format(row.cost)} บาท`
      );
      editBtn.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> แก้ไข`;
      editBtn.addEventListener("click", () => openEditDialog(row));
      costWrap.append(editBtn);

      tdCost.append(costWrap);
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
    const toTerm = elements.to.value.trim();
    const provinceTerm = elements.province.value.trim();
    const selectedVehicle = elements.vehicle ? elements.vehicle.value : "";

    const invalid = [];
    if (!from) invalid.push(elements.from);
    if (invalid.length) {
      invalid.forEach((field) => field.setAttribute("aria-invalid", "true"));
      elements.message.textContent = "กรุณาพิมพ์หรือเลือก FROM จากรายการ";
      invalid[0].focus();
      return;
    }

    let matchedRoutes = getFilteredRoutes(from, toTerm, provinceTerm);
    const totalVehicleCount = new Set(
      matchedRoutes.map((route) => canonical(route.vehicleType)),
    ).size;

    if (selectedVehicle) {
      matchedRoutes = matchedRoutes.filter(
        (r) => canonical(r.vehicleType) === canonical(selectedVehicle),
      );
    }

    const rows = [];
    matchedRoutes.forEach((route) => {
      route.offers
        .filter((offer) =>
          !provinceTerm || matchesProvinceValue(offer.toProvince || "", provinceTerm),
        )
        .forEach((offer) => {
        rows.push({
          route,
          offer,
          from: route.from,
          to: route.to,
          vehicleType: route.vehicleType,
          company: offer.company,
          cost: offer.cost,
          originalCost: offer.originalCost ?? offer.cost,
          isEdited: Boolean(offer.isEdited),
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
      renderMissing(from, toTerm, provinceTerm, selectedVehicle);
    } else {
      renderResults(
        rows,
        from,
        toTerm,
        provinceTerm,
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

  elements.from.addEventListener("input", updateFrom);
  elements.to.addEventListener("input", updateFilters);
  elements.province.addEventListener("input", updateFilters);

  if (elements.vehicle) {
    elements.vehicle.addEventListener("change", () => {
      if (
        elements.from.value &&
        (elements.to.value || elements.province.value)
      ) {
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

  const closeAddDialog = () => elements.addDialog.close();
  elements.addButton.addEventListener("click", () => {
    elements.addForm.reset();
    const currentFrom = exactValue(elements.from.value, data.fromValues) || "";
    const currentTo = currentFrom
      ? exactValue(
          elements.to.value,
          uniqueSorted(routesForFrom(currentFrom).map((route) => route.to)),
        ) || ""
      : "";

    setDatalistOptions(elements.dialogFromList, uniqueSorted(data.fromValues));
    setDatalistOptions(
      elements.dialogToList,
      currentFrom
        ? uniqueSorted(routesForFrom(currentFrom).map((route) => route.to))
        : allToValues(),
    );
    const list = document.querySelector("#vehicle-options");
    list.replaceChildren(...data.vehicleTypes.map((value) => new Option(value, value)));
    setProvinceDatalistOptions(elements.dialogProvinceList, allProvinceValues());
    elements.dialogFrom.value = currentFrom;
    elements.dialogTo.value = currentTo;
    const provinceField = elements.addForm.elements.namedItem("toProvince");
    if (provinceField && elements.province.value.trim()) {
      provinceField.value = elements.province.value.trim();
    }
    elements.addError.textContent = "";
    elements.addDialog.showModal();
    (currentFrom ? elements.dialogTo : elements.dialogFrom).focus();
  });
  elements.dialogFrom.addEventListener("input", () => {
    const from = exactValue(elements.dialogFrom.value, data.fromValues);
    setDatalistOptions(
      elements.dialogToList,
      from ? uniqueSorted(routesForFrom(from).map((route) => route.to)) : allToValues(),
    );
  });
  document.querySelector("#close-data-dialog").addEventListener("click", closeAddDialog);
  document.querySelector("#cancel-data-button").addEventListener("click", closeAddDialog);
  elements.addForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(elements.addForm);
    const from = String(form.get("from") || "").trim();
    const to = String(form.get("to") || "").trim();
    const vehicleType = String(form.get("vehicleType") || "").trim();
    const company = String(form.get("company") || "").trim();
    const cost = Number(form.get("cost"));
    if (!from || !to || !vehicleType || !company || !Number.isFinite(cost) || cost < 0) {
      elements.addError.textContent = "กรุณากรอก FROM, TO, ประเภทรถ บริษัท และราคาต้นทุนให้ครบถ้วน";
      return;
    }
    let route = data.routes.find((item) => canonical(item.from) === canonical(from) && canonical(item.to) === canonical(to) && canonical(item.vehicleType) === canonical(vehicleType));
    const isNewRoute = !route;
    if (!route) {
      route = { from, to, vehicleType, minCost: cost, minCompany: company, offers: [] };
      data.routes.push(route);
    }
    const newOffer = {
      id: `added-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      company,
      cost,
      originalCost: cost,
      isEdited: false,
      sourceRow: null,
      receive: String(form.get("receive") || "").trim(),
      toProvince: String(form.get("toProvince") || "").trim(),
      toCity: String(form.get("toCity") || "").trim(),
      toLocation: String(form.get("toLocation") || "").trim(),
      send: String(form.get("send") || "").trim(),
    };
    route.offers.push(newOffer);
    refreshRouteMin(route);
    if (!data.vehicleTypes.some((value) => canonical(value) === canonical(vehicleType))) data.vehicleTypes.push(vehicleType);
    vehicleOrder.set(vehicleType, vehicleOrder.size);
    try {
      const existing = JSON.parse(localStorage.getItem(savedDataKey) || "[]");
      const savedRoute = existing.find((item) => canonical(item.from) === canonical(from) && canonical(item.to) === canonical(to) && canonical(item.vehicleType) === canonical(vehicleType));
      if (savedRoute) {
        savedRoute.offers.push(newOffer);
        refreshRouteMin(savedRoute);
      } else {
        existing.push({ from, to, vehicleType, minCost: route.minCost, minCompany: route.minCompany, offers: [newOffer] });
      }
      localStorage.setItem(savedDataKey, JSON.stringify(existing));
    } catch {
      route.offers.pop();
      if (isNewRoute) data.routes.splice(data.routes.indexOf(route), 1);
      elements.addError.textContent = "บันทึกไม่ได้ กรุณาตรวจสอบพื้นที่จัดเก็บของเบราว์เซอร์";
      return;
    }
    if (!data.fromValues.some((value) => canonical(value) === canonical(from))) {
      data.fromValues.push(from);
    }
    elements.addForm.reset();
    closeAddDialog();
    updateFilters();
    showToast(`บันทึกข้อมูล ${from} → ${to} ไว้ในเบราว์เซอร์นี้แล้ว`);
  });

  let editingRow = null;

  const closeEditDialog = () => {
    elements.editDialog.close();
    editingRow = null;
  };

  const openEditDialog = (row) => {
    editingRow = row;
    elements.editError.textContent = "";
    elements.editRouteText.textContent = `${row.from} → ${row.to}`;
    elements.editVehicleCompanyText.textContent = `${row.vehicleType} · ${row.company}`;
    elements.editInput.value = row.cost;

    if (row.isEdited && row.originalCost !== row.cost) {
      elements.editHint.innerHTML = `ราคาเดิมจากไฟล์: <strong>${formatMoney.format(row.originalCost)} บาท</strong> (กำลังใช้ราคาแก้ไข)`;
      elements.revertCostButton.hidden = false;
    } else {
      elements.editHint.innerHTML = `ราคาปัจจุบัน: <strong>${formatMoney.format(row.cost)} บาท</strong>`;
      elements.revertCostButton.hidden = true;
    }

    elements.editDialog.showModal();
    elements.editInput.focus();
    elements.editInput.select();
  };

  elements.closeEditDialog.addEventListener("click", closeEditDialog);
  elements.cancelEditButton.addEventListener("click", closeEditDialog);

  elements.revertCostButton.addEventListener("click", () => {
    if (!editingRow) return;
    const { route, offer } = editingRow;
    const revertedCost = offer.originalCost ?? offer.cost;

    offer.cost = revertedCost;
    offer.isEdited = false;
    refreshRouteMin(route);

    try {
      const overrides = JSON.parse(localStorage.getItem(priceOverridesKey) || "{}");
      delete overrides[offer.id];
      localStorage.setItem(priceOverridesKey, JSON.stringify(overrides));
    } catch { /* Ignore storage error */ }

    try {
      const savedRoutes = JSON.parse(localStorage.getItem(savedDataKey) || "[]");
      let found = false;
      savedRoutes.forEach((r) => {
        if (
          canonical(r.from) === canonical(route.from) &&
          canonical(r.to) === canonical(route.to) &&
          canonical(r.vehicleType) === canonical(route.vehicleType)
        ) {
          r.offers.forEach((o) => {
            if (o.id === offer.id) {
              o.cost = revertedCost;
              o.isEdited = false;
              found = true;
            }
          });
          if (found) refreshRouteMin(r);
        }
      });
      if (found) localStorage.setItem(savedDataKey, JSON.stringify(savedRoutes));
    } catch { /* Ignore storage error */ }

    closeEditDialog();
    search();
    showToast(`คืนค่าราคาเดิม ${formatMoney.format(revertedCost)} บาท เรียบร้อยแล้ว`);
  });

  elements.editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!editingRow) return;
    const { route, offer } = editingRow;
    const newCost = Number(elements.editInput.value);

    if (!Number.isFinite(newCost) || newCost < 0) {
      elements.editError.textContent = "กรุณากรอกราคาต้นทุนที่ถูกต้อง (ต้องเป็นตัวเลข 0 ขึ้นไป)";
      return;
    }

    const previousCost = offer.cost;
    offer.cost = Math.round(newCost);
    offer.isEdited = (offer.originalCost != null && offer.cost !== offer.originalCost);
    refreshRouteMin(route);

    try {
      const overrides = JSON.parse(localStorage.getItem(priceOverridesKey) || "{}");
      if (offer.isEdited) {
        overrides[offer.id] = {
          cost: offer.cost,
          updatedAt: new Date().toISOString(),
        };
      } else {
        delete overrides[offer.id];
      }
      localStorage.setItem(priceOverridesKey, JSON.stringify(overrides));
    } catch {
      elements.editError.textContent = "บันทึกไม่ได้ กรุณาตรวจสอบพื้นที่จัดเก็บของเบราว์เซอร์";
      offer.cost = previousCost;
      offer.isEdited = (offer.originalCost != null && offer.cost !== offer.originalCost);
      refreshRouteMin(route);
      return;
    }

    try {
      const savedRoutes = JSON.parse(localStorage.getItem(savedDataKey) || "[]");
      let found = false;
      savedRoutes.forEach((r) => {
        if (
          canonical(r.from) === canonical(route.from) &&
          canonical(r.to) === canonical(route.to) &&
          canonical(r.vehicleType) === canonical(route.vehicleType)
        ) {
          r.offers.forEach((o) => {
            if (o.id === offer.id) {
              o.cost = offer.cost;
              o.isEdited = offer.isEdited;
              found = true;
            }
          });
          if (found) refreshRouteMin(r);
        }
      });
      if (found) localStorage.setItem(savedDataKey, JSON.stringify(savedRoutes));
    } catch { /* Ignore storage error */ }

    closeEditDialog();
    search();
    showToast(`อัปเดตราคา ${offer.company} เป็น ${formatMoney.format(offer.cost)} บาทแล้ว`);
  });

  setupAutocomplete(
    elements.from,
    elements.fromSuggestions,
    () => uniqueSorted(data.fromValues),
  );
  setupAutocomplete(
    elements.to,
    elements.toSuggestions,
    () => {
      const from = exactValue(elements.from.value, data.fromValues);
      if (!from) return [];
      const provinceTerm = elements.province.value.trim();
      const routes = provinceTerm
        ? routesForFrom(from).filter((route) => routeMatchesProvince(route, provinceTerm))
        : routesForFrom(from);
      return uniqueSorted(routes.map((route) => route.to));
    },
  );
  setupAutocomplete(
    elements.province,
    elements.provinceSuggestions,
    () => {
      const from = exactValue(elements.from.value, data.fromValues);
      if (!from) return [];
      const toTerm = elements.to.value.trim();
      const routes = toTerm
        ? routesForFrom(from).filter((route) => containsValue(route.to, toTerm))
        : routesForFrom(from);
      return uniqueSorted(
        routes.flatMap((route) => route.offers.map((offer) => offer.toProvince)),
      );
    },
    true,
  );

  document.addEventListener("pointerdown", (event) => {
    if (!event.target.closest(".select-shell")) {
      autocompleteControls.forEach(({ input, list }) => closeAutocomplete(input, list));
    }
  });

  // Excel Import & Export
  function parseExcelWorkbook(buffer, fileName) {
    if (typeof XLSX === "undefined") {
      throw new Error("ไลบรารีสำหรับอ่าน Excel ยังไม่พร้อมใช้งาน");
    }
    const wb = XLSX.read(buffer, { type: "array" });
    const sheetName =
      wb.SheetNames.find((n) => n.includes("ราคาต้นทุนรถ (by lo)")) ||
      wb.SheetNames.find((n) => n.includes("ราคาต้นทุนรถ")) ||
      wb.SheetNames[0];
    const sheet = wb.Sheets[sheetName];
    if (!sheet) throw new Error("ไม่พบชีตข้อมูลราคาต้นทุนในไฟล์นี้");

    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    const headerRow = rows[1] || [];

    const vehicleCols = [];
    for (let c = 10; c <= 27; c++) {
      const name = (headerRow[c] || "").toString().replace(/\s+/g, " ").trim();
      if (name) vehicleCols.push({ index: c, type: name });
    }

    const routesMap = new Map();
    const fromValuesSet = new Set();
    const vehicleTypesOrdered = [];
    vehicleCols.forEach(({ type }) => {
      if (!vehicleTypesOrdered.includes(type)) vehicleTypesOrdered.push(type);
    });

    for (let i = 2; i < rows.length; i++) {
      const r = rows[i];
      if (!r) continue;
      const from = (r[1] || "").toString().trim();
      if (!from) continue;
      fromValuesSet.add(from);

      const receive = (r[2] || "").toString().trim();
      const toProvince = (r[3] || "").toString().trim();
      const toCity = (r[4] || "").toString().trim();
      const toLocation = (r[5] || "").toString().trim();
      const send = (r[6] || "").toString().trim();
      const company = (r[7] || "").toString().trim();
      const to = (toLocation || toCity || send || toProvince || "")
        .replace(/\s+/g, " ")
        .trim();
      if (!to) continue;

      vehicleCols.forEach(({ index, type }) => {
        const cellVal = r[index];
        const cost = typeof cellVal === "number" ? cellVal : parseFloat(cellVal);
        if (Number.isFinite(cost) && cost > 0) {
          const key =
            from.toUpperCase() +
            "|||" +
            to.toUpperCase() +
            "|||" +
            type.toUpperCase();
          if (!routesMap.has(key)) {
            routesMap.set(key, {
              from,
              to,
              vehicleType: type,
              minCost: cost,
              minCompany: company,
              offers: [],
            });
          }
          const route = routesMap.get(key);
          route.offers.push({
            company,
            cost,
            sourceRow: i + 1,
            receive,
            toProvince,
            toCity,
            toLocation,
            send,
          });
          if (cost < route.minCost) {
            route.minCost = cost;
            route.minCompany = company;
          }
        }
      });
    }

    const routes = Array.from(routesMap.values());
    const fromValues = Array.from(fromValuesSet);

    return {
      sourceMeta: {
        workbook: fileName || "2026.10.03 ราคาต้นทุนรถ.xlsx",
        sheet: sheetName,
        sourceRows: rows.length,
        routeRecords: routes.length,
        generatedAt: new Date().toISOString(),
      },
      vehicleTypes: vehicleTypesOrdered,
      fromValues,
      routes,
    };
  }

  if (elements.importExcelBtn && elements.excelFileInput) {
    elements.importExcelBtn.addEventListener("click", () => {
      elements.excelFileInput.click();
    });

    elements.excelFileInput.addEventListener("change", (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = parseExcelWorkbook(event.target.result, file.name);
          if (!parsed.routes.length) {
            showToast("ไม่พบข้อมูลเส้นทางในไฟล์ Excel นี้");
            return;
          }

          data.routes = parsed.routes;
          data.fromValues = parsed.fromValues;
          data.vehicleTypes = parsed.vehicleTypes;
          data.sourceMeta = parsed.sourceMeta;

          data.routes.forEach((route, rIndex) => {
            route.offers.forEach((offer, oIndex) => {
              offer.id = `orig-${rIndex}-${oIndex}`;
              offer.originalCost = offer.cost;
              offer.isEdited = false;
            });
          });

          try {
            localStorage.setItem(importedDataKey, JSON.stringify(parsed));
            localStorage.removeItem(priceOverridesKey);
          } catch { /* Ignore storage error */ }

          vehicleOrder.clear();
          data.vehicleTypes.forEach((type, index) => vehicleOrder.set(type, index));

          updateFrom();
          updateMetaDisplay();
          showToast(`อัปเดตข้อมูลจาก ${file.name} สำเร็จ (${data.routes.length} เส้นทาง)`);
        } catch (err) {
          console.error(err);
          showToast(`เกิดข้อผิดพลาดในการอ่านไฟล์: ${err.message}`);
        } finally {
          elements.excelFileInput.value = "";
        }
      };
      reader.readAsArrayBuffer(file);
    });
  }

  if (elements.exportExcelBtn) {
    elements.exportExcelBtn.addEventListener("click", () => {
      if (typeof XLSX === "undefined") {
        showToast("ไลบรารีสำหรับสร้าง Excel ยังไม่พร้อมใช้งาน");
        return;
      }

      const rowsData = [
        [
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
        ],
      ];

      data.routes.forEach((route) => {
        route.offers.forEach((offer) => {
          const prices = percentages.map((p) => Math.round(offer.cost * (1 + p)));
          rowsData.push([
            route.from,
            offer.receive || "",
            offer.toProvince || "",
            offer.toCity || "",
            offer.toLocation || "",
            offer.send || "",
            route.vehicleType,
            offer.company,
            offer.cost,
            ...prices,
          ]);
        });
      });

      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet(rowsData);
      XLSX.utils.book_append_sheet(wb, ws, "ราคาต้นทุนรถ_ล่าสุด");
      const exportName = `ราคาต้นทุนรถ_อัปเดตล่าสุด_${new Date().toISOString().slice(0, 10)}.xlsx`;
      XLSX.writeFile(wb, exportName);
      showToast(`ส่งออกไฟล์ ${exportName} เรียบร้อยแล้ว`);
    });
  }

  // Initial population
  setProvinceDatalistOptions(elements.dialogProvinceList, allProvinceValues());
  updateMetaDisplay();
})();
