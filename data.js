window.VEHICLE_COST_DATA = {
  sourceMeta: {
    workbook: "2026.10.03 ราคาต้นทุนรถ.xlsx",
    sheet: "2026.10.3 ราคาต้นทุนรถ (by lo)",
    sourceRows: 644,
    acceptedCells: 784,
    routeRecords: 464,
    generatedAt: "2026-10-05T03:03:37.717Z",
  },
  vehicleTypes: [
    "ปิ๊กอัฟ",
    "6 ล้อ",
    "10ล้อ",
    "6ล้อเปลือย",
    "6ล้อเฮียบ",
    "6ล้อลิฟท้าย",
    "10 ล้อพื้นเรียบ",
    "หัวลากตู้สั้น 20",
    "หัวลากตู้ยาว 40",
    "หัวลากตู้ยาว 3 เพลา",
    "รถโรเบส 20FR (No Low-Bed)",
    "NO-PINK",
    "ปิ๊กอัฟตู้เย็น",
    "6ล้อตู้เย็น",
    "10ล้อตู้เย็น",
    "หัวลากตู้สั้น(ตู้เย็น) 20",
    "หัวลากตู้ยาว(ตู้เย็น) 40",
  ],
  fromValues: [
    "บางกะดี43",
    "Air BKK",
    "AIR DMK",
    "Ayutthaya",
    "Chachongsao",
    "CHEV chonburi",
    "Chonburi",
    "Chon Buri",
    "DHL Bangna",
    "Dynamic",
    "LCB",
    "LKB",
    "MALASIA",
    "MPJ",
    "Sahathai Terminal",
    "Samut Prakan",
    "SEA BKK",
    "Tanarung",
  ],
  routes: [
    {
      from: "บางกะดี43",
      to: "WUS",
      vehicleType: "6 ล้อ",
      minCost: 4500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4500,
          sourceRow: 636,
          receive: "บางกะดี43(บางขุนเทียน)",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "บางกะดี43",
      to: "WUS",
      vehicleType: "6ล้อลิฟท้าย",
      minCost: 4500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 637,
          receive: "บางกะดี43(บางขุนเทียน",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "กระทุ่มแบน",
      vehicleType: "ปิ๊กอัฟตู้เย็น",
      minCost: 2500,
      minCompany: "บริษัท นกรถตู้เย็น",
      offers: [
        {
          company: "บริษัท นกรถตู้เย็น",
          cost: 2500,
          sourceRow: 147,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "",
          send: "กระทุ่มแบน"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "กรุงไทยอินดัสตี้",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1400,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1400,
          sourceRow: 77,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "สุวินทวงศ์",
          toLocation: "กรุงไทยอินดัสตี้",
          send: "กรุงไทยอินดัสตี้ สุวินทวงศ์"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "การเคพะท่าทรายประชาชื่น12",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1200,
          sourceRow: 79,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "หลักสี่",
          toLocation: "การเคพะท่าทรายประชาชื่น12",
          send: "การเคพะท่าทรายประชาชื่น12 แขวงทุ่งสองห้องเขตหลักสี่"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "โกดังอีสด์",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1500,
          sourceRow: 145,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีสด์ กระทุ่มแบน"
        },
        {
          company: "มานิตย์",
          cost: 1500,
          sourceRow: 146,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีสต์กระทุ่มแบน"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "คลองสามวา",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1000,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1000,
          sourceRow: 42,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "คลองสามวา",
          toLocation: "",
          send: "คลองสามวา"
        },
        {
          company: "บริษัท นิติธร",
          cost: 1100,
          sourceRow: 43,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "คลองสามวา",
          toLocation: "",
          send: "คลองสามวา"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "คลองสามวา",
      vehicleType: "6 ล้อ",
      minCost: 2500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2500,
          sourceRow: 44,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "คลองสามวา",
          toLocation: "",
          send: "คลองสามวา"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "คลองสามวา",
      vehicleType: "NO-PINK",
      minCost: 1700,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 1700,
          sourceRow: 40,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "คลองสามวา",
          toLocation: "คลองสามวา",
          send: "คลองสามวา"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "คลองหลวง",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1300,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1300,
          sourceRow: 104,
          receive: "สุวรรณภูมิ",
          toProvince: "Pathum Thani",
          toCity: "คลองหลวง",
          toLocation: "คลองหลวง",
          send: "สยามเทรด  คลองหลวง ปทุมธานี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "งามวงค์วาน",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 45,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "งามวงค์วาน",
          toLocation: "",
          send: "งามวงค์วาน"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "เจริญกรุง37",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 46,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "เจริญกรุง37",
          toLocation: "",
          send: "เจริญกรุง37"
        },
        {
          company: "บริษัท C-PRO",
          cost: 1400,
          sourceRow: 49,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "เจริญกรุง37",
          toLocation: "",
          send: "เจริญกรุง37"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "เจริญกรุง37",
      vehicleType: "6 ล้อ",
      minCost: 3000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 3000,
          sourceRow: 48,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "เจริญกรุง37",
          toLocation: "",
          send: "เจริญกรุง37"
        },
        {
          company: "บริษัท C-PRO",
          cost: 3500,
          sourceRow: 49,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "เจริญกรุง37",
          toLocation: "",
          send: "เจริญกรุง37"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ช.การช่าง",
      vehicleType: "6 ล้อ",
      minCost: 3300,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 3300,
          sourceRow: 23,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "บางปะอิน",
          toLocation: "ช.การช่าง",
          send: "ช.การช่าง  บางปะอิน"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ช.การช่าง",
      vehicleType: "10ล้อ",
      minCost: 5000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5000,
          sourceRow: 24,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "บางปะอิน",
          toLocation: "ช.การช่าง",
          send: "ช.การช่าง  บางปะอิน"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ซีอูส",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1100,
          sourceRow: 41,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "คลองสามวา",
          toLocation: "ซีอูส ",
          send: "ซีอูส  คลองสามวา"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ทริปเปิ้ลอี",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1100,
          sourceRow: 69,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "วุฒากาศ1",
          toLocation: "ทริปเปิ้ลอี",
          send: "ทริปเปิ้ลอี วุฒากาศ1 ตลาดพลูฝั่งธน"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ทางเกวียนอ.แกลง จ.ระยอง",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2500,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 2500,
          sourceRow: 123,
          receive: "สุวรรณภูมิ",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "ทางเกวียนอ.แกลง จ.ระยอง"
        },
        {
          company: "มานิตย์",
          cost: 2500,
          sourceRow: 125,
          receive: "สุวรรณภูมิ",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "ทางเกวียนอ.แกลง จ.ระยอง"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "บ.ชาร์ป แมนูแฟคเจอริ่ง",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1800,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1800,
          sourceRow: 97,
          receive: "สุวรรณภูมิ",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "บ.ชาร์ป แมนูแฟคเจอริ่ง ",
          send: "บ.ชาร์ปมูแฟคเจอริ่ง นครปฐม"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "บางพลี",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1000,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1000,
          sourceRow: 137,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "",
          send: "เขตฟรีโซน บางพลี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "บางพลี",
      vehicleType: "6 ล้อ",
      minCost: 2500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2500,
          sourceRow: 138,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "",
          send: "บางพลี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "บางพลีน้อย",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 139,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "บางพลีน้อย",
          toLocation: "",
          send: "บางพลีน้อย บางบ่อ"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "บีเอที ต.มาบตาพุต อ.เมือง จ.ระยอง",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2900,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 2900,
          sourceRow: 124,
          receive: "สุวรรณภูมิ",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "บีเอที  ต.มาบตาพุต อ.เมือง จ.ระยอง"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "พระราม3",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1200,
          sourceRow: 58,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "พระราม3",
          toLocation: "",
          send: "มหานครเทรดดิ้ง บางคอแหลม(พระราม3)"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 57,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "พระราม3",
          toLocation: "",
          send: "มหานคร พระราม3"
        },
        {
          company: "มานิตย์",
          cost: 1200,
          sourceRow: 59,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "พระราม3",
          toLocation: "",
          send: "พระราม 3 เขตบางโคร่ แวง บางคอแหลม"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "พระราม9",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 900,
          sourceRow: 62,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "พระราม9",
          toLocation: "",
          send: "พระราม9"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "มาบตาพุต",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 3000,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 3000,
          sourceRow: 122,
          receive: "สุวรรณภูมิ",
          toProvince: "Rayong",
          toCity: "มาบตาพุต",
          toLocation: "",
          send: "บีเอที  ต.มาบตาพุต อ.เมือง จ.ระยอง"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "มีนบุรี",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1400,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1400,
          sourceRow: 63,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "มีนบุรี",
          toLocation: "",
          send: "มีนบุรี"
        },
        {
          company: "มานิตย์",
          cost: 1400,
          sourceRow: 64,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "มีนบุรี",
          toLocation: "",
          send: "มีนบุรี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "เมือง",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1600,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1600,
          sourceRow: 87,
          receive: "สุวรรณภูมิ",
          toProvince: "Chonburi",
          toCity: "เมือง",
          toLocation: "เมือง",
          send: "88ต.เหมือง อ.เมือง จ.ชลบุรี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "เมือง",
      vehicleType: "6ล้อตู้เย็น",
      minCost: 5500,
      minCompany: "บริษัท BCS",
      offers: [
        {
          company: "บริษัท BCS",
          cost: 5500,
          sourceRow: 143,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "",
          send: "โคกขาม อ.เมือง จ.สมุทรสาคร"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "เมืองทอง",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1100,
          sourceRow: 103,
          receive: "สุวรรณภูมิ",
          toProvince: "Nonthaburi",
          toCity: "เมืองทอง",
          toLocation: "",
          send: "CITECเมืองทอง"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ยิบมัน",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 3500,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 3500,
          sourceRow: 101,
          receive: "สุวรรณภูมิ",
          toProvince: "Nakhon Sawan",
          toCity: "หนองบัว",
          toLocation: "ยิบมัน",
          send: "ยิบมัน อ.หนองบัว จ.นครสวรรค์"
        },
        {
          company: "มานิตย์",
          cost: 3500,
          sourceRow: 102,
          receive: "สุวรรณภูมิ",
          toProvince: "Nakhon Sawan",
          toCity: "หนองบัว",
          toLocation: "ยิบมัน",
          send: "ยิบมัน อ.หนองบัว จ.นครสวรรค์"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "รัชดา",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1100,
          sourceRow: 67,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "รัชดา",
          toLocation: "",
          send: "ฟรอจูน รัชดา"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ริกเกอร์ทรอนิค",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1400,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1400,
          sourceRow: 96,
          receive: "สุวรรณภูมิ",
          toProvince: "Nakhon Pathom",
          toCity: "บางเลน",
          toLocation: "ริกเกอร์ทรอนิค",
          send: "ริกเกอร์ทรอนิค อ.บางเลน จ.นครปฐม"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ลาดกระบัง",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1500,
          sourceRow: 94,
          receive: "สุวรรณภูมิ",
          toProvince: "LCB",
          toCity: "ลาดกระบัง",
          toLocation: "",
          send: "ลาดกระบังประตู"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "วุฒากาศ1",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 70,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "วุฒากาศ1",
          toLocation: "",
          send: "ทริปเปิ้ลอี วุฒากาศ1 ตลาดพลูฝั่งธน"
        },
        {
          company: "มานิตย์",
          cost: 1200,
          sourceRow: 71,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "วุฒากาศ1",
          toLocation: "",
          send: "ทริปเปิ้ลอี วุฒากาศ1 ตลาดพลูฝั่งธน"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "สามพราน",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1500,
          sourceRow: 98,
          receive: "สุวรรณภูมิ",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "",
          send: "อ.สามพราน จ.นครปฐม"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "สุขสวัสดิ์",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 141,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "สุขสวัสดิ์",
          toLocation: "",
          send: "สุขสวัสดิ์"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "สุขุมวิท39",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1100,
          sourceRow: 75,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "สุขุมวิท39",
          toLocation: "",
          send: "ตึกBIOHOUSE สุขุมวิท39"
        },
        {
          company: "มานิตย์",
          cost: 1400,
          sourceRow: 76,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "สุขุมวิท39",
          toLocation: "",
          send: "ตึกBIOHOUSE สุขุมวิท39"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "สุวินทวงศ์",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1400,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1400,
          sourceRow: 78,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "สุวินทวงศ์",
          toLocation: "",
          send: "กรุงไทยอินดัสตี้ สุวินทวงศ์"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "หมวกเหล็ก",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2200,
      minCompany: "มานิตย์",
      offers: [
        {
          company: "มานิตย์",
          cost: 2200,
          sourceRow: 150,
          receive: "สุวรรณภูมิ",
          toProvince: "Saraburi",
          toCity: "หมวกเหล็ก",
          toLocation: "หมวกเหล็ก",
          send: "โรงปูนสระบุรี หมวกเหล็ก"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 2300,
          sourceRow: 149,
          receive: "สุวรรณภูมิ",
          toProvince: "Saraburi",
          toCity: "หมวกเหล็ก",
          toLocation: "หมวกเหล็ก",
          send: "โรงปูนสระบุรี หมวกเหล็ก"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "เอกชัย78",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 25,
          receive: "สุวรรณภูมิ",
          toProvince: "Bangkok",
          toCity: "เอกชัย78",
          toLocation: "",
          send: "คราวอินเตอร์ เอกชัย78"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ACHIEVA",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 900,
          sourceRow: 28,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "ACHIEVA",
          toLocation: "ACHIEVA",
          send: "ACHIEVAสุคนสวัสดิ์"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 900,
          sourceRow: 27,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "ACHIEVA",
          toLocation: "ACHIEVA",
          send: "ACHIEVAสุคนสวัสดิ์"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ACHIEVA",
      vehicleType: "6 ล้อ",
      minCost: 2500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2500,
          sourceRow: 29,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "ACHIEVA",
          toLocation: "ACHIEVA",
          send: "ACHIEVAสุคนธสวัสดิ์"
        },
        {
          company: "บริษัท ซ้ง2K",
          cost: 4000,
          sourceRow: 26,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "ACHIEVA",
          toLocation: "ACHIEVA",
          send: "ACHIEVAสุคนธสวัสดิ์"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ACHIEVA",
      vehicleType: "6ล้อลิฟท้าย",
      minCost: 4000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4000,
          sourceRow: 30,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "ACHIEVA",
          toLocation: "ACHIEVA",
          send: "ACHIEVA สุคนธสวัสดิ์ 28"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "AIMPACK",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 900,
          sourceRow: 34,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "AIMPACKกรุงเทพกีฑา33"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1000,
          sourceRow: 32,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "กรุงเทพกีฑา33"
        },
        {
          company: "บริษัท นิติธร",
          cost: 1100,
          sourceRow: 33,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "ถ.อโศก-ดินแดง เขตดินแดง  กรุงเทพ"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "AIMPACK",
      vehicleType: "6ล้อเปลือย",
      minCost: 1500,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 1500,
          sourceRow: 31,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "AIMPACKกรุงเทพกีฑา33"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ALLOY",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 53,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "บางกอกน้อย",
          toLocation: "ALLOY",
          send: "ALLOYบางกอกน้อย"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ATI",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1100,
          sourceRow: 129,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "เทพารักษ์",
          toLocation: "ATI",
          send: "บ.เอทีไอ ต.เทพารักษ์อ.เมืองสมุทรปราการ"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "BIOHOUSE",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1000,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1000,
          sourceRow: 72,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "สุขุมวิท39",
          toLocation: "BIOHOUSE",
          send: "ตึกBIOHOUSE สุขุมวิท39"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "BOSON",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1300,
      minCompany: "มานิตย์",
      offers: [
        {
          company: "มานิตย์",
          cost: 1300,
          sourceRow: 90,
          receive: "สุวรรณภูมิ",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชา จ.ชลบุรี"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1800,
          sourceRow: 88,
          receive: "สุวรรณภูมิ",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชา จ.ชลบุรี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "BOSON",
      vehicleType: "6 ล้อ",
      minCost: 3500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 3500,
          sourceRow: 91,
          receive: "สุวรรณภูมิ",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชาชลบุรี"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 6000,
          sourceRow: 89,
          receive: "สุวรรณภูมิ",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชา จ.ชลบุรี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "B.P.C",
      vehicleType: "ปิ๊กอัฟตู้เย็น",
      minCost: 2200,
      minCompany: "บริษัท นกรถตู้เย็น",
      offers: [
        {
          company: "บริษัท นกรถตู้เย็น",
          cost: 2200,
          sourceRow: 148,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut sakorn",
          toCity: "พระราม2",
          toLocation: "B.P.C",
          send: "B.P.Cบางขุนเทียน พระราม2"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "BPZ",
      vehicleType: "6 ล้อ",
      minCost: 3500,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 3500,
          sourceRow: 131,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "BPZ ",
          send: "EPZ ZONEบางพลี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "BRINKฟรีโซน",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1200,
          sourceRow: 132,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "BRINKฟรีโซน",
          send: "BRINKSฟรีโซนบางพลี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "BT WAREHOUSE",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 900,
          sourceRow: 128,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "กิ่งแก้ว",
          toLocation: "BT WAREHOUSE ",
          send: "BT WAREHOUSE กิ่งแก้ว"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 900,
          sourceRow: 127,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "กิ่งแก้ว",
          toLocation: "BT WAREHOUSE ",
          send: "BT WAREHOUSE กิ่งแก้ว"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Central Pinklao",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1300,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1300,
          sourceRow: 52,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "บรมราชชนนี",
          toLocation: "Central Pinklao",
          send: "เซ็นทรัลปิ่นเกล้า"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "CHEV",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1500,
          sourceRow: 142,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEVสมุทรสาคร"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1800,
          sourceRow: 82,
          receive: "สุวรรณภูมิ",
          toProvince: "CHEV chonburi",
          toCity: "บ้านบึง",
          toLocation: "CHEV",
          send: "CHEV บ้านบึงศรีราชา"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "CHEVศรีราชา",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "มานิตย์",
      offers: [
        {
          company: "มานิตย์",
          cost: 1500,
          sourceRow: 81,
          receive: "สุวรรณภูมิ",
          toProvince: "CHEV chonburi",
          toCity: "CHEVศรีราชา",
          toLocation: "",
          send: "CHEVศรีราชา"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "CN",
      vehicleType: "6 ล้อ",
      minCost: 4500,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 4500,
          sourceRow: 121,
          receive: "สุวรรณภูมิ",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "CN",
          send: "CNปลวงแดงจ.ระยอง"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "CVS",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1000,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1000,
          sourceRow: 73,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "สุขุมวิท39",
          toLocation: "CVS",
          send: "CVSสุขุมวิท39"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1000,
          sourceRow: 35,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "CVS",
          toLocation: "CVS",
          send: "CVSสุขุมวิท"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "CVS",
      vehicleType: "6 ล้อ",
      minCost: 3500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 3500,
          sourceRow: 74,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "สุขุมวิท39",
          toLocation: "CVS",
          send: "CVSสุขุมวิท39"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Dynamic",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2300,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 2300,
          sourceRow: 114,
          receive: "สุวรรณภูมิ",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์  ปราจีนบุรี"
        },
        {
          company: "มานิตย์",
          cost: 2300,
          sourceRow: 112,
          receive: "สุวรรณภูมิ",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค ศรีมหาโพธิ์ จ.ปราจีนบุรี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Dynamic",
      vehicleType: "6 ล้อ",
      minCost: 5000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5000,
          sourceRow: 115,
          receive: "สุวรรณภูมิ",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 117,
          receive: "สุวรรณภูมิ",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DINAMICปราจีนบุรี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Dynamic",
      vehicleType: "NO-PINK",
      minCost: 3500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 3500,
          sourceRow: 113,
          receive: "สุวรรณภูมิ",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMIC ปราจีน"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Dynamic",
      vehicleType: "ปิ๊กอัฟตู้เย็น",
      minCost: 2900,
      minCompany: "บริษัท ไร่นา",
      offers: [
        {
          company: "บริษัท ไร่นา",
          cost: 2900,
          sourceRow: 108,
          receive: "สุวรรณภูมิ",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค ศรีมหาโพธิ์"
        },
        {
          company: "บริษัท นกรถตู้เย็น",
          cost: 3000,
          sourceRow: 109,
          receive: "สุวรรณภูมิ (คลังไทย)",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค ศรีมหาโพธิ์ ปราจีน"
        },
        {
          company: "บริษัท BCS",
          cost: 3000,
          sourceRow: 110,
          receive: "สุวรรณภูมิ",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค ศรีมหาโพธิ์"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Dynamic",
      vehicleType: "6ล้อตู้เย็น",
      minCost: 5600,
      minCompany: "บริษัท BCS",
      offers: [
        {
          company: "บริษัท BCS",
          cost: 5600,
          sourceRow: 111,
          receive: "สุวรรณภูมิ",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค ศรีมหาโพธิ์"
        },
        {
          company: "บริษัท ไร่นา",
          cost: 5700,
          sourceRow: 107,
          receive: "สุวรรณภูมิ",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค ศรีมหาโพธิ์"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "EBM",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 900,
          sourceRow: 95,
          receive: "สุวรรณภูมิ",
          toProvince: "LKB",
          toCity: "ลาดกระบัง",
          toLocation: "EBM",
          send: "EBM ลาดกระบัง"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "ERAGON SHOP",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1100,
          sourceRow: 36,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "ERAGON SHOP",
          toLocation: "ERAGON SHOP",
          send: "ERAGON SHOP  สาทร"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Fuzion",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 900,
          sourceRow: 60,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "พระราม9",
          toLocation: "Fuzion",
          send: "FUZIONพระราม9"
        },
        {
          company: "มานิตย์",
          cost: 900,
          sourceRow: 61,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "พระราม9",
          toLocation: "Fuzion",
          send: "FUZION พระราม9"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "JKN",
      vehicleType: "NO-PINK",
      minCost: 1400,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 1400,
          sourceRow: 126,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "JKN",
          toLocation: "JKN",
          send: "JKN แบรลิ่ง"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Karma",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1000,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1000,
          sourceRow: 55,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "ปุณวิถี44",
          toLocation: "Karma",
          send: "บ.คาร์ม่า ซ.ปุณณวิถี 44(พระโขนง)"
        },
        {
          company: "มานิตย์",
          cost: 1000,
          sourceRow: 56,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "ปุณวิถี44",
          toLocation: "Karma",
          send: "บ.คาร์ม่า ซ.ปุณณวิถี 44(พระโขนง)"
        },
        {
          company: "บริษัท นิติธร",
          cost: 3500,
          sourceRow: 100,
          receive: "สุวรรณภูมิ",
          toProvince: "Nakhon Ratchasima",
          toCity: "ขามทะเลสอ",
          toLocation: "Karma",
          send: "KARMA  ต.ขามทะเลสอ  จโคราช"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 3500,
          sourceRow: 99,
          receive: "สุวรรณภูมิ",
          toProvince: "Nakhon Ratchasima",
          toCity: "ขามทะเลสอ",
          toLocation: "Karma",
          send: "KARMA  ต.ขามทะเลสอ  จโคราช"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Kawasaki",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1000,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1000,
          sourceRow: 37,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "Kawasaki",
          toLocation: "Kawasaki",
          send: "KAWASAKI สาทร"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "KEC",
      vehicleType: "6ล้อตู้เย็น",
      minCost: 3900,
      minCompany: "บริษัท BCS",
      offers: [
        {
          company: "บริษัท BCS",
          cost: 3900,
          sourceRow: 133,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "KEC ",
          send: "KEC  W/Hบางพลี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Kinglong",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1000,
      minCompany: "มานิตย์",
      offers: [
        {
          company: "มานิตย์",
          cost: 1000,
          sourceRow: 136,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "Kinglong",
          send: "KINLONG บางพลี"
        },
        {
          company: "บริษัท นิติธร",
          cost: 1200,
          sourceRow: 135,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "Kinglong",
          send: "KINLONG บางพลี"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 134,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "Kinglong",
          send: "KINLONG บางพลี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Konoike",
      vehicleType: "6ล้อตู้เย็น",
      minCost: 3900,
      minCompany: "บริษัท BCS",
      offers: [
        {
          company: "บริษัท BCS",
          cost: 3900,
          sourceRow: 130,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "บางนา กม.19",
          toLocation: "Konoike",
          send: "โดโนอิเกะ บางนา กม.19"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "KUSHITANI",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1100,
          sourceRow: 50,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "นาคนิวาส27",
          toLocation: "KUSHITANI",
          send: "นาคนิวาส27"
        },
        {
          company: "มานิตย์",
          cost: 1100,
          sourceRow: 51,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "นาคนิวาส27",
          toLocation: "KUSHITANI",
          send: "นาคนิวาส27"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "K.V.E",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1400,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1400,
          sourceRow: 80,
          receive: "สุวรรณภูมิ",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "K.V.E",
          send: "K.V.E. บางปะกง"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "MAXXIS",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1000,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1000,
          sourceRow: 54,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "ประชาอุทิศ72",
          toLocation: "MAXXIS",
          send: "MAXXISประชาอุทิศ72"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "MRP",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1800,
      minCompany: "มานิตย์",
      offers: [
        {
          company: "มานิตย์",
          cost: 1800,
          sourceRow: 85,
          receive: "สุวรรณภูมิ",
          toProvince: "Chonburi",
          toCity: "MRP",
          toLocation: "MRP",
          send: "MRP ENGINEERING อ.เมือง จ.ชลบุรี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "MRP",
      vehicleType: "6 ล้อ",
      minCost: 4500,
      minCompany: "บริษัท ซ้ง2K",
      offers: [
        {
          company: "บริษัท ซ้ง2K",
          cost: 4500,
          sourceRow: 93,
          receive: "สุวรรณภูมิ",
          toProvince: "Chonburi",
          toCity: "",
          toLocation: "MRP",
          send: "MRP  ชลบุรี"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 4500,
          sourceRow: 84,
          receive: "สุวรรณภูมิ",
          toProvince: "Chonburi",
          toCity: "MRP",
          toLocation: "MRP",
          send: "MRP อ.เมือง จ.ชลบุรี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Playmondo",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1000,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1000,
          sourceRow: 66,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "โยธินพัฒนา",
          toLocation: "Playmondo",
          send: "โยธินพัฒนา"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1500,
          sourceRow: 65,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "โยธินพัฒนา",
          toLocation: "Playmondo",
          send: "โยธินพัฒนา"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "PPI",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1800,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1800,
          sourceRow: 21,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "คลองหลวง",
          toLocation: "PPI",
          send: "พีพีไอนิคมอุตสาหกรรม อ.คลองหลวง จ.อยุธยา"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1800,
          sourceRow: 20,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "คลองหลวง",
          toLocation: "PPI",
          send: "พีพีไอนิคมอุตสาหกรรม อ.คลองหลวง จ.อยุธยา"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "PPI",
      vehicleType: "6 ล้อ",
      minCost: 4500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4500,
          sourceRow: 22,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "คลองหลวง",
          toLocation: "PPI",
          send: "พีพีไอนิคมอุตสาหกรรม อ.คลองหลวง จ.อยุธยา"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "PRINX",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1800,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1800,
          sourceRow: 92,
          receive: "สุวรรณภูมิ",
          toProvince: "Chonburi",
          toCity: "หนองใหญ่",
          toLocation: "PRINX",
          send: "PRINX อ.หนองใหญ่ จ.ชลบุรี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "QMB",
      vehicleType: "6 ล้อ",
      minCost: 6000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 6000,
          sourceRow: 86,
          receive: "สุวรรณภูมิ",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "QMB",
          send: "QMBบ้านบึงศรีราชา"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "RUWAC",
      vehicleType: "6ล้อเปลือย",
      minCost: 3000,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 3000,
          sourceRow: 83,
          receive: "สุวรรณภูมิ",
          toProvince: "Chon buri",
          toCity: "",
          toLocation: "RUWAC",
          send: "RUWACชลบุรี"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Samut sakorn โกดังอีสด์",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1500,
          sourceRow: 144,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "Samut sakorn โกดังอีสด์",
          send: "โกดังอีสกระทุ่มแบน"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "SIAMETHER FOAM",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1300,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1300,
          sourceRow: 105,
          receive: "สุวรรณภูมิ",
          toProvince: "Pathum Thani",
          toCity: "สามโคก",
          toLocation: "SIAMETHER FOAM",
          send: "SIAMETHER FOAM สามโคก"
        },
        {
          company: "มานิตย์",
          cost: 1500,
          sourceRow: 106,
          receive: "สุวรรณภูมิ",
          toProvince: "Pathum Thani",
          toCity: "สามโคก",
          toLocation: "SIAMETHER FOAM",
          send: "SIAMETHER FOAM สามโคก"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "SPORT TOWN",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1000,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1000,
          sourceRow: 68,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "รามอินทรา 23",
          toLocation: "SPORT TOWN ",
          send: "SPORT TOWN รามอินทรา 23"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "SPRINTRAY",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1200,
          sourceRow: 140,
          receive: "สุวรรณภูมิ",
          toProvince: "Samut Prakan",
          toCity: "บางเสาธง",
          toLocation: "SPRINTRAY",
          send: "SPRINTRAYบางเสาธง"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "Sukhumvit 49",
      vehicleType: "ปิ๊กอัฟตู้เย็น",
      minCost: 1700,
      minCompany: "บริษัท นกรถตู้เย็น",
      offers: [
        {
          company: "บริษัท นกรถตู้เย็น",
          cost: 1700,
          sourceRow: 39,
          receive: "สุวรรณภูมิ",
          toProvince: "BKK",
          toCity: "Sukhumvit 49",
          toLocation: "",
          send: "ไบโอฟาร์ม (สุขุมวิท49)"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "WUS",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1700,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1700,
          sourceRow: 11,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1800,
          sourceRow: 10,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "มานิตย์",
          cost: 1800,
          sourceRow: 17,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUS โรจน์"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "WUS",
      vehicleType: "6 ล้อ",
      minCost: 3300,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 3300,
          sourceRow: 19,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUSนิคมโรจนะ 2",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 3300,
          sourceRow: 15,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "WUS",
      vehicleType: "10ล้อ",
      minCost: 5000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5000,
          sourceRow: 15,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 6000,
          sourceRow: 16,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "WUS",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6000,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 6000,
          sourceRow: 3,
          receive: "สุวรรณภูมิ (คลังไทย)",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท คิงทัส",
          cost: 7000,
          sourceRow: 6,
          receive: "คลังไทย1",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "WUS",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6500,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 6500,
          sourceRow: 7,
          receive: "คลังไทย1",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 6500,
          sourceRow: 3,
          receive: "สุวรรณภูมิ (คลังไทย)",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท คิงทัส",
          cost: 7000,
          sourceRow: 6,
          receive: "คลังไทย1",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "WUS",
      vehicleType: "ปิ๊กอัฟตู้เย็น",
      minCost: 2100,
      minCompany: "บริษัท นกรถตู้เย็น",
      offers: [
        {
          company: "บริษัท นกรถตู้เย็น",
          cost: 2100,
          sourceRow: 9,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท ไร่นา",
          cost: 2400,
          sourceRow: 8,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท BCS",
          cost: 2400,
          sourceRow: 14,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "wus โรจนะ"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "WUS",
      vehicleType: "6ล้อตู้เย็น",
      minCost: 4650,
      minCompany: "บริษัท ไร่นา",
      offers: [
        {
          company: "บริษัท ไร่นา",
          cost: 4650,
          sourceRow: 8,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท BCS",
          cost: 5100,
          sourceRow: 12,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "wus โรจนะ"
        },
        {
          company: "บริษัท ซ้ง2K",
          cost: 5500,
          sourceRow: 5,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท ซ้ง2K",
          cost: 6000,
          sourceRow: 4,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "WUS",
      vehicleType: "10ล้อตู้เย็น",
      minCost: 6200,
      minCompany: "บริษัท BCS",
      offers: [
        {
          company: "บริษัท BCS",
          cost: 6200,
          sourceRow: 13,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "wus โรจนะ"
        },
        {
          company: "บริษัท ซ้ง2K",
          cost: 7500,
          sourceRow: 5,
          receive: "สุวรรณภูมิ",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "Air BKK",
      to: "xinya",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2300,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 2300,
          sourceRow: 118,
          receive: "สุวรรณภูมิ",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
        {
          company: "บริษัท นิติธร",
          cost: 2500,
          sourceRow: 120,
          receive: "สุวรรณภูมิ",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 2500,
          sourceRow: 119,
          receive: "สุวรรณภูมิ",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "ริกเกอร์ทรอนิค",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1200,
          sourceRow: 166,
          receive: "ดอนเมือง",
          toProvince: "Nakhon Pathom",
          toCity: "บางเลน",
          toLocation: "ริกเกอร์ทรอนิค",
          send: "ริกเกอร์ทรอนิค อ.บางเลน จ.นครปฐม"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "BL THAILAND",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2500,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 2500,
          sourceRow: 172,
          receive: "",
          toProvince: "Prachinburi",
          toCity: "",
          toLocation: "BL THAILAND",
          send: "BL THAILAND ปราจีน"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "BOSON",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2500,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 2500,
          sourceRow: 164,
          receive: "ดอนเมือง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชา จ.ชลบุรี"
        },
        {
          company: "มานิตย์",
          cost: 2500,
          sourceRow: 165,
          receive: "ดอนเมือง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชา จ.ชลบุรี"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "Dynamic",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2500,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 2500,
          sourceRow: 170,
          receive: "ดอนเมือง",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์  ปราจีนบุรี"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "Dynamic",
      vehicleType: "6 ล้อ",
      minCost: 5000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5000,
          sourceRow: 171,
          receive: "ดอนเมือง",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "Dynamic",
      vehicleType: "ปิ๊กอัฟตู้เย็น",
      minCost: 2800,
      minCompany: "บริษัท ไร่นา",
      offers: [
        {
          company: "บริษัท ไร่นา",
          cost: 2800,
          sourceRow: 168,
          receive: "ดอนเมือง",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค ศรีมหาโพธิ์"
        },
        {
          company: "บริษัท BCS",
          cost: 3000,
          sourceRow: 169,
          receive: "ดอนเมือง",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค ศรีมหาโพธิ์ ปราจีน"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "Dynamic",
      vehicleType: "6ล้อตู้เย็น",
      minCost: 5400,
      minCompany: "บริษัท ไร่นา",
      offers: [
        {
          company: "บริษัท ไร่นา",
          cost: 5400,
          sourceRow: 168,
          receive: "ดอนเมือง",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค ศรีมหาโพธิ์"
        },
        {
          company: "บริษัท BCS",
          cost: 5900,
          sourceRow: 169,
          receive: "ดอนเมือง",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค ศรีมหาโพธิ์ ปราจีน"
        },
        {
          company: "บริษัท ซ้ง2K",
          cost: 6000,
          sourceRow: 167,
          receive: "ดอนเมือง",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค ศรีมหาโพธิ์ ปราจีน"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "WUS",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1500,
          sourceRow: 158,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "มานิตย์",
          cost: 1500,
          sourceRow: 163,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1800,
          sourceRow: 156,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "WUS",
      vehicleType: "6 ล้อ",
      minCost: 3000,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 3000,
          sourceRow: 157,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 3000,
          sourceRow: 161,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "WUS",
      vehicleType: "10ล้อ",
      minCost: 4000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4000,
          sourceRow: 162,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "WUS",
      vehicleType: "ปิ๊กอัฟตู้เย็น",
      minCost: 1680,
      minCompany: "บริษัท ไร่นา",
      offers: [
        {
          company: "บริษัท ไร่นา",
          cost: 1680,
          sourceRow: 154,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท BCS",
          cost: 2400,
          sourceRow: 159,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "wus โรจนะ"
        },
        {
          company: "บริษัท BCS",
          cost: 2500,
          sourceRow: 160,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "wus โรจนะ"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "WUS",
      vehicleType: "6ล้อตู้เย็น",
      minCost: 4250,
      minCompany: "บริษัท บ้านไร่",
      offers: [
        {
          company: "บริษัท บ้านไร่",
          cost: 4250,
          sourceRow: 153,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท ซ้ง2K",
          cost: 5000,
          sourceRow: 151,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท BCS",
          cost: 5100,
          sourceRow: 159,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "wus โรจนะ"
        },
      ],
    },
    {
      from: "AIR DMK",
      to: "WUS",
      vehicleType: "10ล้อตู้เย็น",
      minCost: 6200,
      minCompany: "บริษัท BCS",
      offers: [
        {
          company: "บริษัท BCS",
          cost: 6200,
          sourceRow: 160,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "wus โรจนะ"
        },
        {
          company: "บริษัท ไร่นา",
          cost: 6750,
          sourceRow: 155,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท ซ้ง2K",
          cost: 7000,
          sourceRow: 152,
          receive: "ดอนเมือง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "Ayutthaya",
      to: "First",
      vehicleType: "6ล้อตู้เย็น",
      minCost: 9500,
      minCompany: "บริษัท BCS",
      offers: [
        {
          company: "บริษัท BCS",
          cost: 9500,
          sourceRow: 173,
          receive: "wus โรจนะ",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "First",
          send: "FIRST  ระยอง"
        },
      ],
    },
    {
      from: "Chachongsao",
      to: "บ้านบึง",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 174,
          receive: "LIINQฉะเชิงเทรา",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "",
          send: "อ.หนองใหญ่ บ้านบึง ชลบุรี"
        },
      ],
    },
    {
      from: "Chachongsao",
      to: "บ้านบึง",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 174,
          receive: "LIINQฉะเชิงเทรา",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "",
          send: "อ.หนองใหญ่ บ้านบึง ชลบุรี"
        },
      ],
    },
    {
      from: "CHEV chonburi",
      to: "MEITU INDUSTRY(ระยอง)",
      vehicleType: "6 ล้อ",
      minCost: 2900,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2900,
          sourceRow: 178,
          receive: "CHEVชลบุรี",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "MEITU INDUSTRY(ระยอง)"
        },
      ],
    },
    {
      from: "CHEV chonburi",
      to: "Runner",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 2000,
          sourceRow: 177,
          receive: "CHEVศรีราชา ชลบุรี",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "Runner",
          send: "RUNNERปลวกแดง จ.ระยอง"
        },
      ],
    },
    {
      from: "CHEV chonburi",
      to: "Runner",
      vehicleType: "6 ล้อ",
      minCost: 2900,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2900,
          sourceRow: 176,
          receive: "CHEVชลบุรี",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "Runner",
          send: "RUNNER  อมตะ"
        },
        {
          company: "บริษัท JJรถเช่า",
          cost: 2900,
          sourceRow: 175,
          receive: "CHEVศรีราชา ชลบุรี",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "Runner",
          send: "RUNNERปลวกแดง จ.ระยอง"
        },
      ],
    },
    {
      from: "CHEV chonburi",
      to: "Runner",
      vehicleType: "10ล้อ",
      minCost: 4300,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4300,
          sourceRow: 176,
          receive: "CHEVชลบุรี",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "Runner",
          send: "RUNNER  อมตะ"
        },
      ],
    },
    {
      from: "Chonburi",
      to: "ยิบมัน",
      vehicleType: "10ล้อ",
      minCost: 19000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 19000,
          sourceRow: 182,
          receive: "ศรีราชาฮาเบอร์",
          toProvince: "Nakhon Sawan",
          toCity: "หนองบัว",
          toLocation: "ยิบมัน",
          send: "ยิบมัน จอ.หนองบัว จ.นครสวรรค์"
        },
      ],
    },
    {
      from: "Chonburi",
      to: "WANNA ONE",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 8000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 8000,
          sourceRow: 183,
          receive: "K.R.C. ทรานสปอร์ต",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "WANNA ONE",
          send: "WANNA บางปลา"
        },
      ],
    },
    {
      from: "Chon Buri",
      to: "แพรกษา",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7000,
      minCompany: "บริษัท สถาพร",
      offers: [
        {
          company: "บริษัท สถาพร",
          cost: 7000,
          sourceRow: 180,
          receive: "ลานKRC ทุ่งสงขลา ชลบุรี",
          toProvince: "Samut Prakan",
          toCity: "แพรกษา",
          toLocation: "",
          send: "แพรกษา สมุทปราการ"
        },
        {
          company: "บริษัท MEGUS",
          cost: 7000,
          sourceRow: 179,
          receive: "ลานKRC ทุ่งสงขลา ชลบุรี",
          toProvince: "Samut Prakan",
          toCity: "แพรกษา",
          toLocation: "",
          send: "แพรกษา สมุทปราการ"
        },
      ],
    },
    {
      from: "DHL Bangna",
      to: "Save thai",
      vehicleType: "NO-PINK",
      minCost: 1600,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 1600,
          sourceRow: 184,
          receive: "DHLบางนา",
          toProvince: "BKK",
          toCity: "Save thai",
          toLocation: "Save thai",
          send: "ลาดพร้าว21  บ.เซฟ"
        },
      ],
    },
    {
      from: "Dynamic",
      to: "WUS",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2500,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 2500,
          sourceRow: 185,
          receive: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท นิติธร",
          cost: 3000,
          sourceRow: 186,
          receive: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "Dynamic",
      to: "WUS",
      vehicleType: "6 ล้อ",
      minCost: 5500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5500,
          sourceRow: 187,
          receive: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "Dynamic",
      to: "WUS",
      vehicleType: "6ล้อลิฟท้าย",
      minCost: 6000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 188,
          receive: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "LCB",
      to: "กระทุ่มแบน",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6000,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6000,
          sourceRow: 389,
          receive: "ลาดกระบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "",
          send: "กระทุ่มแบน"
        },
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 390,
          receive: "ลาดกระบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "",
          send: "กระทุ่มแบน"
        },
      ],
    },
    {
      from: "LCB",
      to: "กระทุ่มแบน",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6500,
          sourceRow: 390,
          receive: "ลาดกระบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "",
          send: "กระทุ่มแบน"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 7000,
          sourceRow: 389,
          receive: "ลาดกระบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "",
          send: "กระทุ่มแบน"
        },
      ],
    },
    {
      from: "LCB",
      to: "โกดังอีสด์",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1500,
          sourceRow: 385,
          receive: "ลาดกระบัง ประตู3",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีสด์ กระทุ่มแบน"
        },
        {
          company: "มานิตย์",
          cost: 1500,
          sourceRow: 387,
          receive: "ลาดกระบังประตู3",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีสต์ กระทุ่มแบน"
        },
      ],
    },
    {
      from: "LCB",
      to: "โกดังอีสด์",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6000,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6000,
          sourceRow: 384,
          receive: "ลาดกระบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีสด์ กระทุ่มแบน"
        },
        {
          company: "บริษัท C-PRO",
          cost: 9000,
          sourceRow: 388,
          receive: "SMC2แหลมฉบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีสกระทุ่มแบน"
        },
        {
          company: "บริษัท MEGUS",
          cost: 10000,
          sourceRow: 386,
          receive: "แหลมฉบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีส กระทุ่มแบน"
        },
      ],
    },
    {
      from: "LCB",
      to: "โกดังอีสด์",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7000,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 7000,
          sourceRow: 384,
          receive: "ลาดกระบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีสด์ กระทุ่มแบน"
        },
        {
          company: "บริษัท C-PRO",
          cost: 9000,
          sourceRow: 388,
          receive: "SMC2แหลมฉบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีสกระทุ่มแบน"
        },
        {
          company: "บริษัท MEGUS",
          cost: 10000,
          sourceRow: 386,
          receive: "แหลมฉบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีส กระทุ่มแบน"
        },
      ],
    },
    {
      from: "LCB",
      to: "คลอง7",
      vehicleType: "6 ล้อ",
      minCost: 5000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5000,
          sourceRow: 279,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Pathum Thani",
          toCity: "ลำลูกกา",
          toLocation: "คลอง7",
          send: "คลอง7 ลำลูกกา"
        },
      ],
    },
    {
      from: "LCB",
      to: "คลอง7",
      vehicleType: "10ล้อ",
      minCost: 6500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 6500,
          sourceRow: 279,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Pathum Thani",
          toCity: "ลำลูกกา",
          toLocation: "คลอง7",
          send: "คลอง7 ลำลูกกา"
        },
      ],
    },
    {
      from: "LCB",
      to: "คลังฟรีโซน",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7000,
          sourceRow: 374,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "ศาลายา",
          toLocation: "คลังฟรีโซน",
          send: "คลังฟรีโซน  สมุทรปราการ"
        },
      ],
    },
    {
      from: "LCB",
      to: "คลังศาลายา",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6400,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6400,
          sourceRow: 274,
          receive: "ลาดกระบัง",
          toProvince: "Nakhon Pathom",
          toCity: "ศาลายา",
          toLocation: "คลังศาลายา",
          send: "คลังศาลายา"
        },
      ],
    },
    {
      from: "LCB",
      to: "คลังศาลายา",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6500,
          sourceRow: 274,
          receive: "ลาดกระบัง",
          toProvince: "Nakhon Pathom",
          toCity: "ศาลายา",
          toLocation: "คลังศาลายา",
          send: "คลังศาลายา"
        },
      ],
    },
    {
      from: "LCB",
      to: "จ.อุดรธานี",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 7500,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 7500,
          sourceRow: 397,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Udon Thani",
          toCity: "",
          toLocation: "",
          send: "จ.อุดรธานี"
        },
      ],
    },
    {
      from: "LCB",
      to: "ดีชัวร์ดีไซร์แอนด์",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 270,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "สัตหีบ",
          toLocation: "ดีชัวร์ดีไซร์แอนด์ ",
          send: "ดีชัวร์ดีไซร์แอนด์ อ.สัตหีบ จ.ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "ดีชัวร์ดีไซร์แอนด์",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 270,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "สัตหีบ",
          toLocation: "ดีชัวร์ดีไซร์แอนด์ ",
          send: "ดีชัวร์ดีไซร์แอนด์ อ.สัตหีบ จ.ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "ทุ่งมหาเมฆ",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1200,
          sourceRow: 216,
          receive: "ลาดกระบังประตู1",
          toProvince: "BKK",
          toCity: "ทุ่งมหาเมฆ",
          toLocation: "",
          send: "สถานฑูตเยอรมันนีสาทรใต้แขวงทุ่งมหาเมฆ"
        },
      ],
    },
    {
      from: "LCB",
      to: "ไทยเวิร์ธ",
      vehicleType: "6ล้อตู้เย็น",
      minCost: 3800,
      minCompany: "บริษัท ซ้ง2K",
      offers: [
        {
          company: "บริษัท ซ้ง2K",
          cost: 3800,
          sourceRow: 219,
          receive: "ท่าเรือลาดกระบัง",
          toProvince: "BKK",
          toCity: "เสรีไทย",
          toLocation: "ไทยเวิร์ธ ",
          send: "ไทยเวิร์ธ เสรีไทย"
        },
      ],
    },
    {
      from: "LCB",
      to: "นิคมพัฒนา",
      vehicleType: "6 ล้อ",
      minCost: 2800,
      minCompany: "บริษัท JJรถเช่า",
      offers: [
        {
          company: "บริษัท JJรถเช่า",
          cost: 2800,
          sourceRow: 322,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "นิคมพัฒนา",
          toLocation: "นิคมพัฒนา",
          send: "KP11 FACTORY นิคมพัฒนา ระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 2900,
          sourceRow: 323,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "นิคมพัฒนา",
          toLocation: "นิคมพัฒนา",
          send: "KP11 FACTORY นิคมพัฒนา ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "นิคมพัฒนา",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 4500,
          sourceRow: 319,
          receive: "ท่าเรือKEERY",
          toProvince: "Rayong",
          toCity: "นิคมพัฒนา",
          toLocation: "นิคมพัฒนา",
          send: "KP11 FACTORY นิคมพัฒนา ระยอง"
        },
        {
          company: "บริษัท เทวิน",
          cost: 5000,
          sourceRow: 321,
          receive: "นิคมแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "นิคมพัฒนา",
          toLocation: "นิคมพัฒนา",
          send: "ไทคูน ปลวกแดงระยอง นิคมพัฒนา"
        },
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 327,
          receive: "ท่าเรือKEERY",
          toProvince: "Rayong",
          toCity: "นิคมพัฒนา",
          toLocation: "นิคมพัฒนา",
          send: "KP11 FACTORY นิคมพัฒนา ระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 5300,
          sourceRow: 324,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "นิคมพัฒนา",
          toLocation: "นิคมพัฒนา",
          send: "D.C.M.นิคมพัฒนา ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "นิคมพัฒนา",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 5000,
          sourceRow: 319,
          receive: "ท่าเรือKEERY",
          toProvince: "Rayong",
          toCity: "นิคมพัฒนา",
          toLocation: "นิคมพัฒนา",
          send: "KP11 FACTORY นิคมพัฒนา ระยอง"
        },
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 327,
          receive: "ท่าเรือKEERY",
          toProvince: "Rayong",
          toCity: "นิคมพัฒนา",
          toLocation: "นิคมพัฒนา",
          send: "KP11 FACTORY นิคมพัฒนา ระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 5300,
          sourceRow: 324,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "นิคมพัฒนา",
          toLocation: "นิคมพัฒนา",
          send: "D.C.M.นิคมพัฒนา ระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 5500,
          sourceRow: 325,
          receive: "แหลมฉบัง",
          toProvince: "Rayong",
          toCity: "นิคมพัฒนา",
          toLocation: "นิคมพัฒนา",
          send: "ไทคูน นิคมพัฒนา ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "นิคมเวลโกล",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 234,
          receive: "ลาดกระบังประตู3",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "นิคมเวลโกล",
          send: "นิคมเวลโกล"
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 5000,
          sourceRow: 223,
          receive: "ลาดกระบังประตู3",
          toProvince: "Chachoengsao",
          toCity: "นิคมเวลโกล",
          toLocation: "นิคมเวลโกล",
          send: "HOSIWELLนิคมเวลโกรล์"
        },
      ],
    },
    {
      from: "LCB",
      to: "นิคมเวลโกล",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 234,
          receive: "ลาดกระบังประตู3",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "นิคมเวลโกล",
          send: "นิคมเวลโกล"
        },
      ],
    },
    {
      from: "LCB",
      to: "นิคมสหรัตน",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 6000,
          sourceRow: 207,
          receive: "ลาดกระบังประตู6",
          toProvince: "Ayutthaya",
          toCity: "คลองหลวง",
          toLocation: "นิคมสหรัตน ",
          send: "นิคมสหรัตน นคร อ.คลองหลวง จ.อยุธยา"
        },
      ],
    },
    {
      from: "LCB",
      to: "นิคมสหรัตน",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 7000,
          sourceRow: 207,
          receive: "ลาดกระบังประตู6",
          toProvince: "Ayutthaya",
          toCity: "คลองหลวง",
          toLocation: "นิคมสหรัตน ",
          send: "นิคมสหรัตน นคร อ.คลองหลวง จ.อยุธยา"
        },
      ],
    },
    {
      from: "LCB",
      to: "นิคมWHA",
      vehicleType: "10ล้อ",
      minCost: 6000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 6000,
          sourceRow: 338,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "มาบตาพุต",
          toLocation: "นิคมWHA",
          send: "รง.คุณภาพน้ำประปานิคมดับบลิวเอช(มาบตาพุต)"
        },
      ],
    },
    {
      from: "LCB",
      to: "นิคมWHA",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 5000,
          sourceRow: 337,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "มาบตาพุต",
          toLocation: "นิคมWHA",
          send: "รง.คุณภาพน้ำประปานิคมดับบลิวเอช(มาบตาพุต)"
        },
        {
          company: "บริษัท สถาพร",
          cost: 5500,
          sourceRow: 339,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "มาบตาพุต",
          toLocation: "นิคมWHA",
          send: "โรงงานปรับปรุงคุณภาพน้ำประปานิคมอุตสาหกรรมดับบลิวเอชเอ"
        },
      ],
    },
    {
      from: "LCB",
      to: "บ.ดีซีเอ็ม ต.พลูตาหลวง อ.สัตหีบ จ.ชลบุรี",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 272,
          receive: "แหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "",
          toLocation: "",
          send: "บ.ดีซีเอ็ม ต.พลูตาหลวง อ.สัตหีบ จ.ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "บ.ไทยเซ็นทรัลเคมี",
      vehicleType: "6 ล้อ",
      minCost: 13000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 13000,
          sourceRow: 208,
          receive: "KERRY ศรีราชา",
          toProvince: "Ayutthaya",
          toCity: "นครหลวง",
          toLocation: "บ.ไทยเซ็นทรัลเคมี",
          send: "บ.ไทยเซ็นทรัลเคมีอ.นครหลวงจ.อยุธยา"
        },
      ],
    },
    {
      from: "LCB",
      to: "บางกรวย",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 3500,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 3500,
          sourceRow: 278,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Nonthaburi",
          toCity: "บางกรวย",
          toLocation: "",
          send: "บางกรวย-ไทรน้อย จ.นนทบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "บางบ่อ",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6500,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 6500,
          sourceRow: 352,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางบ่อ",
          toLocation: "",
          send: "บางบ่อ(คลองส่งน้ำ)"
        },
      ],
    },
    {
      from: "LCB",
      to: "บางบ่อ",
      vehicleType: "รถโรเบส 20FR (No Low-Bed)",
      minCost: 7500,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 7500,
          sourceRow: 354,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางบ่อ",
          toLocation: "",
          send: "บางบ่อ"
        },
        {
          company: "บริษัท MEGUS",
          cost: 8000,
          sourceRow: 355,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางบ่อ",
          toLocation: "",
          send: "บางบ่อ"
        },
        {
          company: "บริษัท MEGUS",
          cost: 15500,
          sourceRow: 353,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางบ่อ",
          toLocation: "",
          send: "บางบ่อ"
        },
      ],
    },
    {
      from: "LCB",
      to: "บางพลี",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4000,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 4000,
          sourceRow: 365,
          receive: "ลาดกระบังประตู3",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "",
          send: "ซอยวัดนามแดง สมุทรปราการ"
        },
      ],
    },
    {
      from: "LCB",
      to: "บางละมุง",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 7500,
      minCompany: "บริษัทมันนี่",
      offers: [
        {
          company: "บริษัทมันนี่",
          cost: 7500,
          sourceRow: 237,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บางละมุง",
          toLocation: "",
          send: "โรงงานเพรียวบางละมุง"
        },
      ],
    },
    {
      from: "LCB",
      to: "บางละมุง",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7500,
      minCompany: "บริษัทมันนี่",
      offers: [
        {
          company: "บริษัทมันนี่",
          cost: 7500,
          sourceRow: 237,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บางละมุง",
          toLocation: "",
          send: "โรงงานเพรียวบางละมุง"
        },
      ],
    },
    {
      from: "LCB",
      to: "บางเสาธง",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7000,
      minCompany: "บริษัทมันนี่",
      offers: [
        {
          company: "บริษัทมันนี่",
          cost: 7000,
          sourceRow: 370,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางเสาธง",
          toLocation: "",
          send: "สปริงเล"
        },
      ],
    },
    {
      from: "LCB",
      to: "ปลวกแดง",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท สถาพร",
      offers: [
        {
          company: "บริษัท สถาพร",
          cost: 4500,
          sourceRow: 335,
          receive: "นิคมแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "",
          send: "อ.ปลวกแดง จ.ระยอง"
        },
        {
          company: "บริษัท C-PRO",
          cost: 4800,
          sourceRow: 334,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "",
          send: "TURBOต.ปลวกแดง อ.ปลวกแดง จ.ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "ปลวกแดง",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 4500,
      minCompany: "บริษัท สถาพร",
      offers: [
        {
          company: "บริษัท สถาพร",
          cost: 4500,
          sourceRow: 336,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "",
          send: "TERBO  ปลวกแดง ระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4500,
          sourceRow: 333,
          receive: "แหลมฉบัง",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "",
          send: "TURBOต.ปลวกแดง อ.ปลวกแดง จ.ระยอง"
        },
        {
          company: "บริษัท C-PRO",
          cost: 4800,
          sourceRow: 334,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "",
          send: "TURBOต.ปลวกแดง อ.ปลวกแดง จ.ระยอง"
        },
        {
          company: "บริษัท สถาพร",
          cost: 5000,
          sourceRow: 335,
          receive: "นิคมแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "",
          send: "อ.ปลวกแดง จ.ระยอง"
        },
        {
          company: "บริษัทไร้ซึ",
          cost: 7000,
          sourceRow: 332,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "",
          send: "TURBO ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "พระพุทธบาท",
      vehicleType: "6 ล้อ",
      minCost: 7500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 7500,
          sourceRow: 392,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Saraburi",
          toCity: "พระพุทธบาท",
          toLocation: "พระพุทธบาท",
          send: "โรงโม่หิน จ.สระบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "พระพุทธบาท",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 10000,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 10000,
          sourceRow: 391,
          receive: "นิคมแหลมฉบัง",
          toProvince: "Saraburi",
          toCity: "พระพุทธบาท",
          toLocation: "พระพุทธบาท",
          send: "โรงโมหิน อ.พระพุทธบาท จ.สระบุรี"
        },
        {
          company: "บริษัท C-PRO",
          cost: 10000,
          sourceRow: 394,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Saraburi",
          toCity: "พระพุทธบาท",
          toLocation: "พระพุทธบาท",
          send: "โรงโมหิน อ.พระพุทธบาท จ.สระบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 14000,
          sourceRow: 393,
          receive: "แหลมฉบัง",
          toProvince: "Saraburi",
          toCity: "พระพุทธบาท",
          toLocation: "พระพุทธบาท",
          send: "โรงโมหิน อ.พระพุทธบาท จ.สระบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "พระพุทธบาท",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 10500,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 10500,
          sourceRow: 391,
          receive: "นิคมแหลมฉบัง",
          toProvince: "Saraburi",
          toCity: "พระพุทธบาท",
          toLocation: "พระพุทธบาท",
          send: "โรงโมหิน อ.พระพุทธบาท จ.สระบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "พัทยา",
      vehicleType: "6 ล้อ",
      minCost: 3500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 3500,
          sourceRow: 250,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "พัทยา",
          toLocation: "",
          send: "พัทยา"
        },
      ],
    },
    {
      from: "LCB",
      to: "พัทยา",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 252,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "พัทยา",
          toLocation: "",
          send: "นาเกลือ20 เมืองพัทยา จ.ชลบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4500,
          sourceRow: 251,
          receive: "แหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "พัทยา",
          toLocation: "",
          send: "นาเกลือ20 เมืองพัทยา จ.ชลบุรี"
        },
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 253,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "พัทยา",
          toLocation: "",
          send: "แอทแล๊ช  พัทยา"
        },
      ],
    },
    {
      from: "LCB",
      to: "พัทยา",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 252,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "พัทยา",
          toLocation: "",
          send: "นาเกลือ20 เมืองพัทยา จ.ชลบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 251,
          receive: "แหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "พัทยา",
          toLocation: "",
          send: "นาเกลือ20 เมืองพัทยา จ.ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "เพียวละมุน",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 247,
          receive: "ท่าKERRY  แหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "เพียวละมุน",
          send: "โรงานเพียวละมุน"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4700,
          sourceRow: 245,
          receive: "ท่าเรือKERRY(แหลมฉบัง)",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "เพียวละมุน",
          send: "โรงงานเพียวละมุน  บ้านบึง"
        },
        {
          company: "บริษัท MTQ",
          cost: 6300,
          sourceRow: 244,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "เพียวละมุน",
          send: "โรงงานเพียวบ้านบึง"
        },
      ],
    },
    {
      from: "LCB",
      to: "เพียวละมุน",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 4500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 247,
          receive: "ท่าKERRY  แหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "เพียวละมุน",
          send: "โรงานเพียวละมุน"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4700,
          sourceRow: 245,
          receive: "ท่าเรือKERRY(แหลมฉบัง)",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "เพียวละมุน",
          send: "โรงงานเพียวละมุน  บ้านบึง"
        },
        {
          company: "บริษัท MTQ",
          cost: 6300,
          sourceRow: 244,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "เพียวละมุน",
          send: "โรงงานเพียวบ้านบึง"
        },
      ],
    },
    {
      from: "LCB",
      to: "ยิบมัน",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 13500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 13500,
          sourceRow: 277,
          receive: "ท่าเรือแหลมฉบังประตูB3",
          toProvince: "Nakhon Sawan",
          toCity: "หนองบัว",
          toLocation: "ยิบมัน",
          send: "ยิบมัน อ.หนองบัว จ.นครสวรรค์"
        },
      ],
    },
    {
      from: "LCB",
      to: "ระยอง",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2000,
          sourceRow: 340,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "ระยอง",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 4500,
          sourceRow: 341,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "ศรีมหาโพธิ์",
      vehicleType: "6 ล้อ",
      minCost: 5000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 302,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "",
          send: "ศรีมหาโพธิ์ ปราจีนบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "ส.เทพกิจ",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6500,
          sourceRow: 362,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "ส.เทพกิจ",
          send: "ส.เทพกิจ(คลองส่งน้ำ)"
        },
      ],
    },
    {
      from: "LCB",
      to: "ส.เทพกิจ",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6500,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 6500,
          sourceRow: 357,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "ส.เทพกิจ",
          send: "ส.เทพกิจส มุทรปราการ"
        },
        {
          company: "บริษัท C-PRO",
          cost: 6500,
          sourceRow: 362,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "ส.เทพกิจ",
          send: "ส.เทพกิจ(คลองส่งน้ำ)"
        },
        {
          company: "บริษัท สถาพร",
          cost: 7000,
          sourceRow: 363,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "ส.เทพกิจ",
          send: "ส.เทพกิจ   สมุทรปราการ"
        },
        {
          company: "บริษัทไร้ซึ",
          cost: 7300,
          sourceRow: 360,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "ส.เทพกิจ",
          send: "ส.เทพกิจ(คลองส่งน้ำ)"
        },
        {
          company: "บริษัท MTQ",
          cost: 7500,
          sourceRow: 358,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "ส.เทพกิจ",
          send: "ส.เทพกิจ (คลองส่งน้ำ)"
        },
        {
          company: "บริษัทมันนี่",
          cost: 8500,
          sourceRow: 359,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "ส.เทพกิจ",
          send: "ส.เทพกิจ(คลองส่งน้ำ)"
        },
      ],
    },
    {
      from: "LCB",
      to: "สนามกีฬากระบี่",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 54000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 54000,
          sourceRow: 273,
          receive: "แหลมฉบัง",
          toProvince: "Krabi",
          toCity: "",
          toLocation: "",
          send: "สนามกีฬากระบี่"
        },
      ],
    },
    {
      from: "LCB",
      to: "สนามกีฬากระบี่",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 54000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 54000,
          sourceRow: 273,
          receive: "แหลมฉบัง",
          toProvince: "Krabi",
          toCity: "",
          toLocation: "",
          send: "สนามกีฬากระบี่"
        },
      ],
    },
    {
      from: "LCB",
      to: "สอง",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 30000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 30000,
          sourceRow: 282,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Phrae",
          toCity: "สอง",
          toLocation: "",
          send: "อ.สอง จ.แพร่"
        },
      ],
    },
    {
      from: "LCB",
      to: "สอง",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 30500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 30500,
          sourceRow: 282,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Phrae",
          toCity: "สอง",
          toLocation: "",
          send: "อ.สอง จ.แพร่"
        },
      ],
    },
    {
      from: "LCB",
      to: "หาดใหญ่ / สงขลา",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 51000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 51000,
          sourceRow: 395,
          receive: "แหลมฉบัง",
          toProvince: "Songkla",
          toCity: "",
          toLocation: "",
          send: "หาดใหญ่ / สงขลา"
        },
      ],
    },
    {
      from: "LCB",
      to: "หาดใหญ่ / สงขลา",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 51000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 51000,
          sourceRow: 395,
          receive: "แหลมฉบัง",
          toProvince: "Songkla",
          toCity: "",
          toLocation: "",
          send: "หาดใหญ่ / สงขลา"
        },
      ],
    },
    {
      from: "LCB",
      to: "อ.ปลวกแดง จ.ระยอง",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 345,
          receive: "แหลมฉบัง",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "อ.ปลวกแดง จ.ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "อ.ปลวกแดง จ.ระยอง",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5500,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5500,
          sourceRow: 345,
          receive: "แหลมฉบัง",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "อ.ปลวกแดง จ.ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "แอทแล็ช",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "บริษัท JJ",
      offers: [
        {
          company: "บริษัท JJ",
          cost: 1500,
          sourceRow: 249,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "พัทยา",
          toLocation: "แอทแล็ช",
          send: "แอทแล็ช ถ.เทพประสิทธิ์เมืองพัทยา อ.บางละมุง ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "ฮันชิน",
      vehicleType: "6 ล้อ",
      minCost: 1800,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 1800,
          sourceRow: 269,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "ฮันชิน",
          send: "ฮันชิน อ.ศรีราชา จ.ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "ACHIEVA",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2300,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 2300,
          sourceRow: 213,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "BKK",
          toCity: "ACHIEVA",
          toLocation: "ACHIEVA",
          send: "ACHIEVAสุคนสวัสดิ์"
        },
      ],
    },
    {
      from: "LCB",
      to: "BFTZ",
      vehicleType: "6 ล้อ",
      minCost: 3500,
      minCompany: "บริษัท ซ้ง2K",
      offers: [
        {
          company: "บริษัท ซ้ง2K",
          cost: 3500,
          sourceRow: 224,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "BFTZ",
          send: "BFTZ บางประกง"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 4000,
          sourceRow: 225,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "BFTZ",
          send: "BFTZ บางประกง"
        },
        {
          company: "บริษัท C-PRO",
          cost: 4000,
          sourceRow: 227,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "BFTZ",
          send: "BFTZ บางประกง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4000,
          sourceRow: 226,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "BFTZ",
          send: "BFTZ บางประกง"
        },
      ],
    },
    {
      from: "LCB",
      to: "BOSON",
      vehicleType: "6 ล้อ",
      minCost: 2500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2500,
          sourceRow: 254,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชา จ.ชลบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 2500,
          sourceRow: 255,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชาชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "BOSON",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4200,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4200,
          sourceRow: 256,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชาชลบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4200,
          sourceRow: 255,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชาชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "BOSON",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 4500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 256,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชาชลบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4500,
          sourceRow: 255,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชาชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "CAMELLIA",
      vehicleType: "6 ล้อ",
      minCost: 6000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 6000,
          sourceRow: 380,
          receive: "ท่าเรือแหลมฉบังB4",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "CAMELLIA",
          send: "CAMELLAกระทุ่มแบน"
        },
      ],
    },
    {
      from: "LCB",
      to: "CENTURY",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 23000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 23000,
          sourceRow: 303,
          receive: "แหลมฉบัง HUTCHISON",
          toProvince: "Ratchaburi",
          toCity: "CENTURY",
          toLocation: "CENTURY",
          send: "CENTURY ราชบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "CHEV",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1800,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1800,
          sourceRow: 257,
          receive: "NHPลาดกระบังประตู7",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "CHEV",
      vehicleType: "6 ล้อ",
      minCost: 2900,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2900,
          sourceRow: 240,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "CHEV",
          send: "CHEV บ้านบึง ศรีราชา"
        },
      ],
    },
    {
      from: "LCB",
      to: "CHEV",
      vehicleType: "10ล้อ",
      minCost: 6500,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 6500,
          sourceRow: 258,
          receive: "NHPประตู7/NYKประตู6 (แหลมฉบัง)",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "CHEV",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4200,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4200,
          sourceRow: 261,
          receive: "ท่าเรือแหลมฉบังประตูB3",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4200,
          sourceRow: 259,
          receive: "ท่าเรือแหลมฉบังประตูB3",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
        {
          company: "บริษัท MTQ",
          cost: 5800,
          sourceRow: 241,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "CHEV",
          send: "CHEV บ้านบึง"
        },
        {
          company: "บริษัท C-PRO",
          cost: 9500,
          sourceRow: 378,
          receive: "MOLแหลมฉบัง",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEV สมุทรสาคร "
        },
        {
          company: "บริษัท MEGUS",
          cost: 9500,
          sourceRow: 377,
          receive: "MOLแหลมฉบัง",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEVLสมุทรสาคร"
        },
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 45000,
          sourceRow: 238,
          receive: "ท่าเรือแหลมฉบังประตูB3",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "CHEV",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 4000,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 4000,
          sourceRow: 239,
          receive: "ท่าเรือแหลมฉบังประตูB3",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 4500,
          sourceRow: 238,
          receive: "ท่าเรือแหลมฉบังประตูB3",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 260,
          receive: "LCB.แหลมฉบัง B.1",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4500,
          sourceRow: 259,
          receive: "ท่าเรือแหลมฉบังประตูB3",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
        {
          company: "บริษัท MTQ",
          cost: 5800,
          sourceRow: 241,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "CHEV",
          send: "CHEV บ้านบึง"
        },
        {
          company: "บริษัทไร้ซึ",
          cost: 7000,
          sourceRow: 242,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "CHEV",
          send: "CHEV  บ้านบึง"
        },
        {
          company: "บริษัท C-PRO",
          cost: 10000,
          sourceRow: 378,
          receive: "MOLแหลมฉบัง",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEV สมุทรสาคร "
        },
        {
          company: "บริษัท MEGUS",
          cost: 10000,
          sourceRow: 377,
          receive: "MOLแหลมฉบัง",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEVLสมุทรสาคร"
        },
        {
          company: "บริษัท MTQ",
          cost: 11000,
          sourceRow: 376,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEV สมุทรสาคร"
        },
      ],
    },
    {
      from: "LCB",
      to: "CHEV",
      vehicleType: "หัวลากตู้ยาว 3 เพลา",
      minCost: 6300,
      minCompany: "บริษัท MTQ",
      offers: [
        {
          company: "บริษัท MTQ",
          cost: 6300,
          sourceRow: 241,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "CHEV",
          send: "CHEV บ้านบึง"
        },
      ],
    },
    {
      from: "LCB",
      to: "Chonburi",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 4500,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 4500,
          sourceRow: 243,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "Chonburi",
          send: "อ.หนองใหญ่ บ้านบึง ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "CJTINDUSTRY",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7500,
          sourceRow: 373,
          receive: "K.R.Cแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "แพรกษา",
          toLocation: "CJTINDUSTRY",
          send: "CJTINDUSTRYสมุทรปราการ"
        },
        {
          company: "บริษัท MEGUS",
          cost: 7500,
          sourceRow: 372,
          receive: "K.R.Cแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "แพรกษา",
          toLocation: "CJTINDUSTRY",
          send: "CJTINDUSTRYสมุทรปราการ"
        },
      ],
    },
    {
      from: "LCB",
      to: "CTNCHANGAN AUTO ระยอง",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 6000,
          sourceRow: 343,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "CTNCHANGAN AUTO ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "CTNCHANGAN AUTO ระยอง",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 6000,
          sourceRow: 343,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "CTNCHANGAN AUTO ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "CUI AND COVER",
      vehicleType: "6 ล้อ",
      minCost: 4900,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4900,
          sourceRow: 215,
          receive: "ท่าเรือแหลมฉบังประตูB3",
          toProvince: "BKK",
          toCity: "ดุสิต",
          toLocation: "CUI AND COVER",
          send: "CUT ANDCOVER เขตดุสิต"
        },
        {
          company: "บริษัท JJรถเช่า",
          cost: 5200,
          sourceRow: 214,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "BKK",
          toCity: "ดุสิต",
          toLocation: "CUI AND COVER",
          send: "CUI AND COVER ดุสิต"
        },
      ],
    },
    {
      from: "LCB",
      to: "Dynamic",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 3000,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 3000,
          sourceRow: 293,
          receive: "แหลมฉบังD1",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 3000,
          sourceRow: 294,
          receive: "แหลมฉบังD1",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 3000,
          sourceRow: 298,
          receive: "แหลมฉบังD1",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "Dynamic",
      vehicleType: "6 ล้อ",
      minCost: 5000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 298,
          receive: "แหลมฉบังD1",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 5300,
          sourceRow: 294,
          receive: "แหลมฉบังD1",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "Dynamic",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6500,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 6500,
          sourceRow: 290,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMIC ศรีมหาโพธิ์ ปราจีนบุรี"
        },
        {
          company: "บริษัท C-PRO",
          cost: 7500,
          sourceRow: 283,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค กบินทร์บุรี จ.ปราจีนบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 8000,
          sourceRow: 299,
          receive: "แหลมฉบังD1",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 12000,
          sourceRow: 296,
          receive: "ท่าเรือแหลมฉบังKERRY",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "Dynamic",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7000,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 7000,
          sourceRow: 291,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMIC ศรีมหาโพธิ์ ปราจีนบุรี"
        },
        {
          company: "บริษัท C-PRO",
          cost: 8000,
          sourceRow: 283,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "Dynamic",
          toLocation: "Dynamic",
          send: "ไดนามิค กบินทร์บุรี จ.ปราจีนบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 8000,
          sourceRow: 299,
          receive: "แหลมฉบังD1",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "Dynamic",
      vehicleType: "รถโรเบส 20FR (No Low-Bed)",
      minCost: 14000,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 14000,
          sourceRow: 292,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMIC ศรีมหาโพธิ์ ปราจีนบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "Dynamic",
      vehicleType: "หัวลากตู้สั้น(ตู้เย็น) 20",
      minCost: 10500,
      minCompany: "บริษัท โขคธีระภัทรตู้เย็น",
      offers: [
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 10500,
          sourceRow: 289,
          receive: "ท่าเรือแหลมKERRY",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "Dynamic",
      vehicleType: "หัวลากตู้ยาว(ตู้เย็น) 40",
      minCost: 11000,
      minCompany: "บริษัท โขคธีระภัทรตู้เย็น",
      offers: [
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 11000,
          sourceRow: 289,
          receive: "ท่าเรือแหลมKERRY",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "GIOBAI",
      vehicleType: "6 ล้อ",
      minCost: 4300,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 4300,
          sourceRow: 375,
          receive: "ท่าB4 (ลาดกระบัง)",
          toProvince: "Samut Prakan",
          toCity: "",
          toLocation: "GIOBAI ",
          send: "GIOBAI สมุทรปราการ"
        },
      ],
    },
    {
      from: "LCB",
      to: "GOLD",
      vehicleType: "6 ล้อ",
      minCost: 5000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 301,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "GOLD",
          send: "GOLD ศรีมหาโพธิ์ ปราจีน"
        },
      ],
    },
    {
      from: "LCB",
      to: "GUANWEI",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 9000,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 9000,
          sourceRow: 210,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "วังน้อย",
          toLocation: "GUANWEI ",
          send: "GUANWEI  วังน้อย อยุธยา"
        },
        {
          company: "บริษัท C-PRO",
          cost: 9000,
          sourceRow: 209,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "วังน้อย",
          toLocation: "GUANWEI",
          send: "GUANWEI  วังน้อย อยุธยา"
        },
      ],
    },
    {
      from: "LCB",
      to: "Hanshin",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 1000,
          sourceRow: 265,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "Hanshin",
          send: "HANSHINศรีราชา ชลบุรี"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 1100,
          sourceRow: 263,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "Hanshin",
          send: "HANSHINศรีราชา ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "Hanshin",
      vehicleType: "6 ล้อ",
      minCost: 1800,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 1800,
          sourceRow: 265,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "Hanshin",
          send: "HANSHINศรีราชา ชลบุรี"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 2500,
          sourceRow: 263,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "Hanshin",
          send: "HANSHINศรีราชา ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "Hanshin",
      vehicleType: "10ล้อ",
      minCost: 3000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 3000,
          sourceRow: 266,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "Hanshin",
          send: "HANSHINศรีราชา ชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "JIT",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5800,
      minCompany: "บริษัท โขคธีระภัทรตู้เย็น",
      offers: [
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 5800,
          sourceRow: 228,
          receive: "ท่าเรือแหลมฉบังประตูB4",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "JIT",
          send: "JIT( โรง11 ) W/Hบางประกง"
        },
      ],
    },
    {
      from: "LCB",
      to: "JIT",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5800,
      minCompany: "บริษัท โขคธีระภัทรตู้เย็น",
      offers: [
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 5800,
          sourceRow: 228,
          receive: "ท่าเรือแหลมฉบังประตูB4",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "JIT",
          send: "JIT( โรง11 ) W/Hบางประกง"
        },
        {
          company: "บริษัท เทวิน",
          cost: 5800,
          sourceRow: 229,
          receive: "ท่าเรือแหลมฉบังB4",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "JIT",
          send: "JIT( โรง11 ) W/Hบางประกง"
        },
      ],
    },
    {
      from: "LCB",
      to: "JTT",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5500,
          sourceRow: 230,
          receive: "ท่าเรือแหลมฉบังประตูB4",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "JTT",
          send: "JIT( โรง11 ) W/Hบางประกง"
        },
      ],
    },
    {
      from: "LCB",
      to: "JYXD",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "บริษัท JJรถเช่า",
      offers: [
        {
          company: "บริษัท JJรถเช่า",
          cost: 1500,
          sourceRow: 235,
          receive: "ท่าเรือแหลมฉบังB4",
          toProvince: "Chonburi",
          toCity: "บ่อวิน",
          toLocation: "JYXD",
          send: "JYXDสรีราชา"
        },
        {
          company: "บริษัท MEGUS",
          cost: 2000,
          sourceRow: 236,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chonburi",
          toCity: "บ่อวิน",
          toLocation: "JYXD",
          send: "JYXDชลบุรี"
        },
      ],
    },
    {
      from: "LCB",
      to: "Karma",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2000,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 2000,
          sourceRow: 217,
          receive: "ท่าKERRY",
          toProvince: "BKK",
          toCity: "ปุณวิถี44",
          toLocation: "Karma",
          send: "ถ. ปุณณวิถี44พระโขนง"
        },
      ],
    },
    {
      from: "LCB",
      to: "Karma",
      vehicleType: "6 ล้อ",
      minCost: 17500,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 17500,
          sourceRow: 275,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Nakhon Ratchasima",
          toCity: "ขามทะเลสอ",
          toLocation: "Karma",
          send: "KAMAR ขามทะเลสอ จ.โคราช"
        },
      ],
    },
    {
      from: "LCB",
      to: "Karma",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 14500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 14500,
          sourceRow: 276,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Nakhon Ratchasima",
          toCity: "ขามทะเลสอ",
          toLocation: "Karma",
          send: "KAMAR ขามทะเลสอ จ.โคราช"
        },
        {
          company: "บริษัท เทวิน",
          cost: 19000,
          sourceRow: 275,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Nakhon Ratchasima",
          toCity: "ขามทะเลสอ",
          toLocation: "Karma",
          send: "KAMAR ขามทะเลสอ จ.โคราช"
        },
      ],
    },
    {
      from: "LCB",
      to: "Karma",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 15000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 15000,
          sourceRow: 276,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Nakhon Ratchasima",
          toCity: "ขามทะเลสอ",
          toLocation: "Karma",
          send: "KAMAR ขามทะเลสอ จ.โคราช"
        },
        {
          company: "บริษัท MTQ",
          cost: 20000,
          sourceRow: 398,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "",
          toCity: "",
          toLocation: "Karma",
          send: "คาร์ม่า"
        },
      ],
    },
    {
      from: "LCB",
      to: "Kawasaki",
      vehicleType: "6 ล้อ",
      minCost: 8000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 8000,
          sourceRow: 281,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Pathumthani",
          toCity: "Kawasaki",
          toLocation: "Kawasaki",
          send: "KAWASAKI คลองหลวง คลอง7"
        },
      ],
    },
    {
      from: "LCB",
      to: "Kawasaki",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 8500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 8500,
          sourceRow: 281,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Pathumthani",
          toCity: "Kawasaki",
          toLocation: "Kawasaki",
          send: "KAWASAKI คลองหลวง คลอง7"
        },
        {
          company: "บริษัท MEGUS",
          cost: 9500,
          sourceRow: 280,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Pathumthani",
          toCity: "Kawasaki",
          toLocation: "Kawasaki",
          send: "KAWASAKI คลองหลวง คลอง7"
        },
      ],
    },
    {
      from: "LCB",
      to: "KB",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 7000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7000,
          sourceRow: 218,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "BKK",
          toCity: "มีนบุรี",
          toLocation: "KB",
          send: "KB  มีนบุรี  (งานคาวาซากิ)"
        },
      ],
    },
    {
      from: "LCB",
      to: "KB",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7500,
          sourceRow: 218,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "BKK",
          toCity: "มีนบุรี",
          toLocation: "KB",
          send: "KB  มีนบุรี  (งานคาวาซากิ)"
        },
      ],
    },
    {
      from: "LCB",
      to: "Konoike",
      vehicleType: "6 ล้อ",
      minCost: 4900,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 4900,
          sourceRow: 351,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางนา กม.19",
          toLocation: "Konoike",
          send: "บางนา กม19"
        },
      ],
    },
    {
      from: "LCB",
      to: "LCL ระยอง",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2200,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 2200,
          sourceRow: 347,
          receive: "แหลมฉบัง kerry ",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "LCL ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "LEC",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "บริษัท JJรถเช่า",
      offers: [
        {
          company: "บริษัท JJรถเช่า",
          cost: 1500,
          sourceRow: 330,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "LEC",
          send: "LECปลวกแดง จ.ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "LEC",
      vehicleType: "6 ล้อ",
      minCost: 2700,
      minCompany: "บริษัท JJรถเช่า",
      offers: [
        {
          company: "บริษัท JJรถเช่า",
          cost: 2700,
          sourceRow: 330,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "LEC",
          send: "LECปลวกแดง จ.ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "LEC ปลวกแดง ระยอง",
      vehicleType: "6 ล้อ",
      minCost: 2900,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 2900,
          sourceRow: 344,
          receive: "ท่าเรือแหลมฉบังKERRY",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "LEC ปลวกแดง ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "LEC ปลวกแดง ระยอง",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 4500,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 4500,
          sourceRow: 344,
          receive: "ท่าเรือแหลมฉบังKERRY",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "LEC ปลวกแดง ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "LIINQ",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5800,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5800,
          sourceRow: 221,
          receive: "KSPแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "ท่าไข่",
          toLocation: "LIINQ",
          send: "LIINQฉะเชิงเทรา"
        },
        {
          company: "บริษัท เทวิน",
          cost: 6000,
          sourceRow: 220,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "ท่าไข่",
          toLocation: "LIINQ",
          send: "LIINQฉะเชิงเทรา(วิ่งแพง)"
        },
      ],
    },
    {
      from: "LCB",
      to: "LIINQ",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6000,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 6000,
          sourceRow: 220,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "ท่าไข่",
          toLocation: "LIINQ",
          send: "LIINQฉะเชิงเทรา(วิ่งแพง)"
        },
        {
          company: "บริษัท C-PRO",
          cost: 6300,
          sourceRow: 222,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "ท่าไข่",
          toLocation: "LIINQ",
          send: "LIINQฉะเชิงเทรา"
        },
        {
          company: "บริษัท MEGUS",
          cost: 6300,
          sourceRow: 221,
          receive: "KSPแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "ท่าไข่",
          toLocation: "LIINQ",
          send: "LIINQฉะเชิงเทรา"
        },
      ],
    },
    {
      from: "LCB",
      to: "MAP",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 16000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 16000,
          sourceRow: 211,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "อุทัย",
          toLocation: "MAP",
          send: "MAP อ.อุทัย จ.อยุธยาโรเบส)"
        },
      ],
    },
    {
      from: "LCB",
      to: "NEW WAVE",
      vehicleType: "6 ล้อ",
      minCost: 3500,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 3500,
          sourceRow: 233,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "NEW WAVE",
          send: "New Waveนิวเวฟ(บางปะกง ฉะเชิงเทรา"
        },
        {
          company: "บริษัท JJ",
          cost: 4500,
          sourceRow: 232,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "NEW WAVE",
          send: "New Waveนิวเวฟ(บางปะกง ฉะเชิงเทรา"
        },
        {
          company: "บริษัท JJรถเช่า",
          cost: 4500,
          sourceRow: 231,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "NEW WAVE",
          send: "NEW WAVE นิวเวฟ บางประกง ฉะเชิงเทรา"
        },
      ],
    },
    {
      from: "LCB",
      to: "NSP",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4000,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 4000,
          sourceRow: 364,
          receive: "ลาดกระบังประตู3",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "NSP",
          send: "NSPหนามแดง บางพลี"
        },
      ],
    },
    {
      from: "LCB",
      to: "NSP",
      vehicleType: "NO-PINK",
      minCost: 1400,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 1400,
          sourceRow: 364,
          receive: "ลาดกระบังประตู3",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "NSP",
          send: "NSPหนามแดง บางพลี"
        },
      ],
    },
    {
      from: "LCB",
      to: "PIONEER",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 6000,
          sourceRow: 366,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางเสาธง",
          toLocation: "PIONEER",
          send: "คลังPIONEERบางเสาธง จ.สมุทรปราการ"
        },
      ],
    },
    {
      from: "LCB",
      to: "Samut Sakorn",
      vehicleType: "6 ล้อ",
      minCost: 5800,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5800,
          sourceRow: 379,
          receive: "SINOแหลมฉบัง",
          toProvince: "Samut Sakorn",
          toCity: "Samut Sakorn",
          toLocation: "Samut Sakorn",
          send: "E THAIINDUSTRIAL"
        },
      ],
    },
    {
      from: "LCB",
      to: "SPRINTRAY",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 369,
          receive: "ท่าเรือแหลมKERRY",
          toProvince: "Samut Prakan",
          toCity: "บางเสาธง",
          toLocation: "SPRINTRAY",
          send: "SPRINTRAY  บางเสาธง"
        },
        {
          company: "บริษัท C-PRO",
          cost: 7000,
          sourceRow: 368,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางเสาธง",
          toLocation: "SPRINTRAY",
          send: "CTSSPRINTRAY บางเสาธง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 7000,
          sourceRow: 367,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางเสาธง",
          toLocation: "SPRINTRAY",
          send: "CTSSPRINTRAY บางเสาธง"
        },
      ],
    },
    {
      from: "LCB",
      to: "SPRINTRAY",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6500,
          sourceRow: 369,
          receive: "ท่าเรือแหลมKERRY",
          toProvince: "Samut Prakan",
          toCity: "บางเสาธง",
          toLocation: "SPRINTRAY",
          send: "SPRINTRAY  บางเสาธง"
        },
        {
          company: "บริษัท C-PRO",
          cost: 8000,
          sourceRow: 371,
          receive: "ลาดกระบังประตู3",
          toProvince: "Samut Prakan",
          toCity: "บางเสาธง ",
          toLocation: "SPRINTRAY",
          send: "SPRINTRAY  บางเสาธง   (เอาตู้ส่งแหลม)"
        },
      ],
    },
    {
      from: "LCB",
      to: "tURBO",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 9000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 9000,
          sourceRow: 212,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "อุทัย",
          toLocation: "tURBO",
          send: "TURBO อ.อุทัย จ.อยุธยา"
        },
      ],
    },
    {
      from: "LCB",
      to: "tURBO",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 9000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 9000,
          sourceRow: 212,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "อุทัย",
          toLocation: "tURBO",
          send: "TURBO อ.อุทัย จ.อยุธยา"
        },
      ],
    },
    {
      from: "LCB",
      to: "T YCOONS (ไทคูน ระยอง)",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 346,
          receive: "แหลมฉบัง",
          toProvince: "Rayong",
          toCity: "",
          toLocation: "",
          send: "T YCOONS (ไทคูน ระยอง)"
        },
      ],
    },
    {
      from: "LCB",
      to: "ULTIMATE",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 8500,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 8500,
          sourceRow: 381,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "ULTIMATE",
          send: "ULTIMATEกระทุ่มแบน"
        },
        {
          company: "บริษัท ซ้ง2K",
          cost: 9000,
          sourceRow: 382,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "ULTIMATE",
          send: "ULTIMATEกระทุ่มแบน"
        },
        {
          company: "บริษัท MEGUS",
          cost: 9000,
          sourceRow: 383,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "ULTIMATE",
          send: "ULTIMATEกระทุ่มแบน"
        },
      ],
    },
    {
      from: "LCB",
      to: "WANNA ONE",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 8000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 8000,
          sourceRow: 356,
          receive: "MAHAPORN  แหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "WANNA ONE",
          send: "WANNA ONE  บางปลา"
        },
        {
          company: "บริษัท MTQ",
          cost: 8000,
          sourceRow: 348,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "WANNA ONE",
          toLocation: "WANNA ONE",
          send: "WANNAONE"
        },
        {
          company: "บริษัทมันนี่",
          cost: 8500,
          sourceRow: 349,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "WANNA ONE",
          toLocation: "WANNA ONE",
          send: "WAN NA ONE"
        },
        {
          company: "บริษัทไร้ซึ",
          cost: 8500,
          sourceRow: 350,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Samut Prakan",
          toCity: "WANNA ONE",
          toLocation: "WANNA ONE",
          send: "WAN NA ONE"
        },
      ],
    },
    {
      from: "LCB",
      to: "WEIDA",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 8000,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 8000,
          sourceRow: 284,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "กบินทร์",
          toLocation: "WEIDA",
          send: "WEI Daกบินทร์ ปราจีน"
        },
        {
          company: "บริษัท C-PRO",
          cost: 8000,
          sourceRow: 287,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "กบินทร์",
          toLocation: "WEIDA",
          send: "WEI DA กบินทร์  ปราจีน"
        },
        {
          company: "บริษัท C-PRO",
          cost: 8500,
          sourceRow: 288,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "กบินทร์",
          toLocation: "WEIDA",
          send: "WEI DA กบินทร์  ปราจีน"
        },
        {
          company: "บริษัท MEGUS",
          cost: 10500,
          sourceRow: 286,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "กบินทร์",
          toLocation: "WEIDA",
          send: "WEI DA กบินทร์  ปราจีน"
        },
        {
          company: "บริษัท MEGUS",
          cost: 11000,
          sourceRow: 285,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "กบินทร์",
          toLocation: "WEIDA",
          send: "WEI Daกบินทร์  ปราจีน"
        },
      ],
    },
    {
      from: "LCB",
      to: "WEIDA",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 8500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 8500,
          sourceRow: 288,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "กบินทร์",
          toLocation: "WEIDA",
          send: "WEI DA กบินทร์  ปราจีน"
        },
        {
          company: "บริษัท MEGUS",
          cost: 10500,
          sourceRow: 286,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Prachinburi",
          toCity: "กบินทร์",
          toLocation: "WEIDA",
          send: "WEI DA กบินทร์  ปราจีน"
        },
      ],
    },
    {
      from: "LCB",
      to: "WHA",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 331,
          receive: "แหลมฉบัง",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "WHA",
          send: "WHA  อีเทริร์นซีบอส"
        },
      ],
    },
    {
      from: "LCB",
      to: "WHA",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 331,
          receive: "แหลมฉบัง",
          toProvince: "Rayong",
          toCity: "ปลวกแดง",
          toLocation: "WHA",
          send: "WHA  อีเทริร์นซีบอส"
        },
      ],
    },
    {
      from: "LCB",
      to: "WUS",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 3200,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 3200,
          sourceRow: 193,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 3200,
          sourceRow: 191,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท นิติธร",
          cost: 3300,
          sourceRow: 192,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "LCB",
      to: "WUS",
      vehicleType: "6 ล้อ",
      minCost: 6000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 6000,
          sourceRow: 194,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "LCB",
      to: "WUS",
      vehicleType: "10ล้อ",
      minCost: 7800,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 7800,
          sourceRow: 194,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "LCB",
      to: "WUS",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 1400,
      minCompany: "บริษัทไร้ซึ",
      offers: [
        {
          company: "บริษัทไร้ซึ",
          cost: 1400,
          sourceRow: 197,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท C-PRO",
          cost: 9000,
          sourceRow: 204,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท MEGUS",
          cost: 9500,
          sourceRow: 202,
          receive: "ท่าเรือแหลมฉบังประตูC1 C2",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUS  นิคมโรจนะ"
        },
        {
          company: "บริษัท MTQ",
          cost: 10700,
          sourceRow: 195,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท MEGUS",
          cost: 11000,
          sourceRow: 198,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUS  นิคมโรจนะ"
        },
        {
          company: "บริษัท MEGUS",
          cost: 11500,
          sourceRow: 199,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUS  นิคมโรจนะ(เฟสเรค)"
        },
        {
          company: "บริษัทไร้ซึ",
          cost: 12000,
          sourceRow: 196,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
      ],
    },
    {
      from: "LCB",
      to: "WUS",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 9000,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 9000,
          sourceRow: 190,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท สถาพร",
          cost: 9000,
          sourceRow: 205,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUS  นิคมโรจนะ"
        },
        {
          company: "บริษัท C-PRO",
          cost: 9000,
          sourceRow: 204,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท MEGUS",
          cost: 9500,
          sourceRow: 202,
          receive: "ท่าเรือแหลมฉบังประตูC1 C2",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUS  นิคมโรจนะ"
        },
        {
          company: "บริษัท MTQ",
          cost: 10700,
          sourceRow: 195,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท C-PRO",
          cost: 11500,
          sourceRow: 203,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัทไร้ซึ",
          cost: 12000,
          sourceRow: 196,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัทไร้ซึ",
          cost: 13000,
          sourceRow: 206,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "นิคม โรจนะ"
        },
        {
          company: "บริษัทไร้ซึ",
          cost: 14000,
          sourceRow: 197,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
      ],
    },
    {
      from: "LCB",
      to: "WUS",
      vehicleType: "รถโรเบส 20FR (No Low-Bed)",
      minCost: 20500,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 20500,
          sourceRow: 201,
          receive: "ท่าเรือแหลมฉบังประตูB3",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUS  นิคมโรจนะ"
        },
      ],
    },
    {
      from: "LCB",
      to: "WUS",
      vehicleType: "หัวลากตู้ยาว(ตู้เย็น) 40",
      minCost: 13000,
      minCompany: "บริษัท โขคธีระภัทรตู้เย็น",
      offers: [
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 13000,
          sourceRow: 189,
          receive: "ท่าเรือแหลมฉบังประตู3",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "LCB",
      to: "xinya",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2000,
      minCompany: "บริษัท JJรถเช่า",
      offers: [
        {
          company: "บริษัท JJรถเช่า",
          cost: 2000,
          sourceRow: 306,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 2000,
          sourceRow: 311,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 2200,
          sourceRow: 317,
          receive: "แหลมฉบัง B4",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "xinya",
      vehicleType: "6 ล้อ",
      minCost: 2900,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2900,
          sourceRow: 307,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
        {
          company: "บริษัท JJรถเช่า",
          cost: 2900,
          sourceRow: 306,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 2900,
          sourceRow: 313,
          receive: "ท่าเรือแหลมฉบังKERRY",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "xinya",
      vehicleType: "10ล้อ",
      minCost: 3500,
      minCompany: "บริษัท JJรถเช่า",
      offers: [
        {
          company: "บริษัท JJรถเช่า",
          cost: 3500,
          sourceRow: 305,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 3700,
          sourceRow: 309,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 6500,
          sourceRow: 307,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "xinya",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท เทวิน",
      offers: [
        {
          company: "บริษัท เทวิน",
          cost: 4500,
          sourceRow: 304,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 318,
          receive: "ท่าเรือแหลมฉบังKERRY",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4500,
          sourceRow: 315,
          receive: "ท่าเรือแหลมฉบังKERRY",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
        {
          company: "บริษัท MTQ",
          cost: 6500,
          sourceRow: 308,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "xinya",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 4500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 318,
          receive: "ท่าเรือแหลมฉบังKERRY",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4500,
          sourceRow: 315,
          receive: "ท่าเรือแหลมฉบังKERRY",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
        {
          company: "บริษัท เทวิน",
          cost: 5000,
          sourceRow: 304,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 312,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
        {
          company: "บริษัท MTQ",
          cost: 6500,
          sourceRow: 308,
          receive: "ท่าเรือแหลมฉบัง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
      ],
    },
    {
      from: "LCB",
      to: "Yuser",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5500,
      minCompany: "บริษัทไร้ซึ",
      offers: [
        {
          company: "บริษัทไร้ซึ",
          cost: 5500,
          sourceRow: 271,
          receive: "K.R.C  แหลม",
          toProvince: "Chonburi",
          toCity: "",
          toLocation: "Yuser ",
          send: "Yuser ชลบุรี"
        },
      ],
    },
    {
      from: "LKB",
      to: "แก่งคอย",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 7500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7500,
          sourceRow: 409,
          receive: "ลาดกระบัง  ",
          toProvince: "Saraburi",
          toCity: "แก่งคอย",
          toLocation: "",
          send: "แก่งคอย สระบุรี"
        },
      ],
    },
    {
      from: "LKB",
      to: "แก่งคอย",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 8000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 8000,
          sourceRow: 409,
          receive: "ลาดกระบัง  ",
          toProvince: "Saraburi",
          toCity: "แก่งคอย",
          toLocation: "",
          send: "แก่งคอย สระบุรี"
        },
      ],
    },
    {
      from: "LKB",
      to: "สามโคก",
      vehicleType: "6ล้อตู้เย็น",
      minCost: 6200,
      minCompany: "บริษัท ซ้ง2K",
      offers: [
        {
          company: "บริษัท ซ้ง2K",
          cost: 6200,
          sourceRow: 404,
          receive: "EVERGREEN",
          toProvince: "Pathum Thani",
          toCity: "สามโคก",
          toLocation: "สามโคก",
          send: "สามโคกปทุม"
        },
      ],
    },
    {
      from: "LKB",
      to: "CHEV",
      vehicleType: "6 ล้อ",
      minCost: 3500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 3500,
          sourceRow: 401,
          receive: "ลาดกระบัง N.Y.K",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 4000,
          sourceRow: 407,
          receive: "EVERGREEN ลาดกระบัง3",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEVสมุทรสาคร"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 4500,
          sourceRow: 399,
          receive: "NHPลาดกระบังประตู7",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVชลบุรี"
        },
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 402,
          receive: "NHP.ลาดกระบัง",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4500,
          sourceRow: 400,
          receive: "ลาดกระบัง N.Y.K",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
      ],
    },
    {
      from: "LKB",
      to: "CHEV",
      vehicleType: "10ล้อ",
      minCost: 5500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5500,
          sourceRow: 407,
          receive: "EVERGREEN ลาดกระบัง3",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEVสมุทรสาคร"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 6000,
          sourceRow: 399,
          receive: "NHPลาดกระบังประตู7",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVชลบุรี"
        },
      ],
    },
    {
      from: "LKB",
      to: "E THAI INDUSTRIAL",
      vehicleType: "6 ล้อ",
      minCost: 4000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4000,
          sourceRow: 408,
          receive: "ลาดกระบังประตู3",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "E THAI INDUSTRIAL",
          send: "E THAI INDUSTRIAL กระทุ่มแบน"
        },
      ],
    },
    {
      from: "LKB",
      to: "WELDAY",
      vehicleType: "6 ล้อ",
      minCost: 4500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4500,
          sourceRow: 405,
          receive: "ลาดกระบังประตู7",
          toProvince: "Rayong",
          toCity: "บ้านค่าย",
          toLocation: "WELDAY",
          send: "WELDAYระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 4800,
          sourceRow: 406,
          receive: "ลาดกระบังประตู7",
          toProvince: "Rayong",
          toCity: "บ้านค่าย",
          toLocation: "WELDAY",
          send: "WELDAYระยอง"
        },
      ],
    },
    {
      from: "MALASIA",
      to: "บางพลี",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 23000,
      minCompany: "บริษัท EW",
      offers: [
        {
          company: "บริษัท EW",
          cost: 23000,
          sourceRow: 411,
          receive: "MALASIA(มาเลเซีย)",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "",
          send: "BANGPLEE(บางพลี)"
        },
        {
          company: "บริษัท BT",
          cost: 38000,
          sourceRow: 410,
          receive: "มาเลเซีย",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "",
          send: "บางพลี"
        },
      ],
    },
    {
      from: "MPJ",
      to: "CHEV",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 4500,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 4500,
          sourceRow: 414,
          receive: "MPJ ชลบุรี",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "CHEV",
          send: "CHEVศรีราชา ชลบุรี"
        },
      ],
    },
    {
      from: "MPJ",
      to: "LIINQ",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5800,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5800,
          sourceRow: 413,
          receive: "MP J DISTRIBUTIONศรีราชา จ.ชลบุรี",
          toProvince: "Chachoengsao",
          toCity: "ท่าไข่",
          toLocation: "LIINQ",
          send: "LIINQฉะเชิงเทรา"
        },
        {
          company: "บริษัท MEGUS",
          cost: 5800,
          sourceRow: 412,
          receive: "MP J DISTRIBUTIONศรีราชา จ.ชลบุรี",
          toProvince: "Chachoengsao",
          toCity: "ท่าไข่",
          toLocation: "LIINQ",
          send: "LIINQฉะเชิงเทรา"
        },
      ],
    },
    {
      from: "MPJ",
      to: "LIINQ",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5800,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 5800,
          sourceRow: 412,
          receive: "MP J DISTRIBUTIONศรีราชา จ.ชลบุรี",
          toProvince: "Chachoengsao",
          toCity: "ท่าไข่",
          toLocation: "LIINQ",
          send: "LIINQฉะเชิงเทรา"
        },
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 413,
          receive: "MP J DISTRIBUTIONศรีราชา จ.ชลบุรี",
          toProvince: "Chachoengsao",
          toCity: "ท่าไข่",
          toLocation: "LIINQ",
          send: "LIINQฉะเชิงเทรา"
        },
      ],
    },
    {
      from: "Sahathai Terminal",
      to: "CHEV",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1800,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1800,
          sourceRow: 415,
          receive: "ท่าสหไทย สมุทรปราการ",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "CHEV",
          send: "CHEV บ้านบึงศรีราชา"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "โกดังที.เอ็ม.จี",
      vehicleType: "10ล้อ",
      minCost: 4500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4500,
          sourceRow: 445,
          receive: "ท่าBMT",
          toProvince: "Samut sakorn ",
          toCity: "แบริ่ง",
          toLocation: "โกดังที.เอ็ม.จี",
          send: "โกดังที.เอ็ม.จี แบริ่ง"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "คลังศาลายา",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6500,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 6500,
          sourceRow: 421,
          receive: "ท่าเรือ UNITHAI",
          toProvince: "Nakhon Pathom",
          toCity: "ศาลายา",
          toLocation: "คลังศาลายา",
          send: "ศาลายา +ค่าเพิ่มรับท่า"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "ต้าเจีย",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5500,
          sourceRow: 441,
          receive: "CONTELNER DEPOTบางพลี",
          toProvince: "Samut Sakhon",
          toCity: "กระทุ่มแบน",
          toLocation: "ต้าเจีย",
          send: "ต้าเจีย  สมุทรสาคร"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "เทพารักษ์",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "มานิตย์",
      offers: [
        {
          company: "มานิตย์",
          cost: 1100,
          sourceRow: 433,
          receive: "UNITHAI (ยูนิไทย) สมุทรปราการ",
          toProvince: "Samut Prakan",
          toCity: "เทพารักษ์",
          toLocation: "",
          send: "บ.โฟร์บีเอเชีย เทพารักษ์"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "ไทยแลนอิเล็คทรอนิค",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2600,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 2600,
          sourceRow: 446,
          receive: "ท่ายูนิไทย",
          toProvince: "",
          toCity: "",
          toLocation: "",
          send: "ไทยแลนอิเล็คทรอนิค"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "บ.บีจีเอสอินเตอร์เนชั่นแนล",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 4500,
          sourceRow: 438,
          receive: "ท่าBMT",
          toProvince: "Samut Prakan",
          toCity: "แพรกษา",
          toLocation: "บ.บีจีเอสอินเตอร์เนชั่นแนล",
          send: "บ.บีจีเเนชั่นแนล"
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 4500,
          sourceRow: 437,
          receive: "ท่าBMT",
          toProvince: "Samut Prakan",
          toCity: "แพรกษา",
          toLocation: "บ.บีจีเอสอินเตอร์เนชั่นแนล",
          send: "บ.บีจีเอสอินเตอร์เนชั่นแนล(แพรกษา)"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "บางนาใต้",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5600,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5600,
          sourceRow: 418,
          receive: "ทำเนียบท่าเรือ ทีเอส(ปู่เจ้าสมิงพราย)",
          toProvince: "BKK",
          toCity: "บางนาใต้",
          toLocation: "",
          send: "บางจาก รถไฟสายเก่า"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "เพียวละมุน",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7500,
          sourceRow: 419,
          receive: "ท่ายูนิไทย สมุทรปราการ",
          toProvince: "Chonburi",
          toCity: "บ้านบึง",
          toLocation: "เพียวละมุน",
          send: "โรงงานเพียวละมุน  บ้านบึง (คืนตู้บางนา กม.4)"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "แพรกษา",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5000,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5000,
          sourceRow: 439,
          receive: "THAI ENG KONG กม.18",
          toProvince: "Samut Prakan",
          toCity: "แพรกษา",
          toLocation: "",
          send: "ซ.เพิ่มทรัพย์ แพรกษา12"
        },
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 440,
          receive: "THAI ENG KONG กม.18",
          toProvince: "Samut Prakan",
          toCity: "แพรกษา",
          toLocation: "",
          send: "ซ.เพิ่มทรัพย์ แพรกษา12"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "แพรกษา",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5500,
          sourceRow: 439,
          receive: "THAI ENG KONG กม.18",
          toProvince: "Samut Prakan",
          toCity: "แพรกษา",
          toLocation: "",
          send: "ซ.เพิ่มทรัพย์ แพรกษา12"
        },
        {
          company: "บริษัท C-PRO",
          cost: 5500,
          sourceRow: 440,
          receive: "THAI ENG KONG กม.18",
          toProvince: "Samut Prakan",
          toCity: "แพรกษา",
          toLocation: "",
          send: "ซ.เพิ่มทรัพย์ แพรกษา12"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "ยิบมัน",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 11400,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 11400,
          sourceRow: 423,
          receive: "THAI ENG KONG กม.18",
          toProvince: "Nakhon Sawan",
          toCity: "หนองบัว",
          toLocation: "ยิบมัน",
          send: "ยิบมัน อ.หนองบัว จ.นครสวรรค์"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "วาเลนเซีย",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 5000,
          sourceRow: 436,
          receive: "ลานD DEPOT บางพลี กม.12",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "วาเลนเซีย",
          send: "วาเลนเซีย บางปลา"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "BIOPHRAM",
      vehicleType: "หัวลากตู้สั้น(ตู้เย็น) 20",
      minCost: 6000,
      minCompany: "บริษัท โขคธีระภัทรตู้เย็น",
      offers: [
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 6000,
          sourceRow: 431,
          receive: "ท่ายูนิไทย สมุทรปราการ",
          toProvince: "Samut Prakan",
          toCity: "BIOPHRAM",
          toLocation: "BIOPHRAM",
          send: "BIOPHRAMบางปู"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "BIOPHRAM",
      vehicleType: "หัวลากตู้ยาว(ตู้เย็น) 40",
      minCost: 6500,
      minCompany: "บริษัท โขคธีระภัทรตู้เย็น",
      offers: [
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 6500,
          sourceRow: 431,
          receive: "ท่ายูนิไทย สมุทรปราการ",
          toProvince: "Samut Prakan",
          toCity: "BIOPHRAM",
          toLocation: "BIOPHRAM",
          send: "BIOPHRAMบางปู"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "INT",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5300,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 5300,
          sourceRow: 442,
          receive: "ท่าเรือ UNITHAI",
          toProvince: "Samut Sakhon",
          toCity: "คอกกระบือ",
          toLocation: "INT",
          send: "INT คอกกระบือ จ.สมุทรสาคร"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "Karma",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 11000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 11000,
          sourceRow: 422,
          receive: "ลานตู้DEPOT(บางพลี)",
          toProvince: "Nakhon Ratchasima",
          toCity: "ขามทะเลสอ",
          toLocation: "Karma",
          send: "คาร์ม่า อ.ขามทะเลจ.นครราชสีมา"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "Karma",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 11000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 11000,
          sourceRow: 422,
          receive: "ลานตู้DEPOT(บางพลี)",
          toProvince: "Nakhon Ratchasima",
          toCity: "ขามทะเลสอ",
          toLocation: "Karma",
          send: "คาร์ม่า อ.ขามทะเลจ.นครราชสีมา"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "Kerry",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 8000,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 8000,
          sourceRow: 420,
          receive: "S.C.Sบางปลา",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "Kerry",
          send: "KERRY ศรีราชา"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "KOKILA",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5500,
          sourceRow: 434,
          receive: "CCIS3",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "KOKILA",
          send: "KOKILAบางปลา"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "KOKILA",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6000,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6000,
          sourceRow: 434,
          receive: "CCIS3",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "KOKILA",
          send: "KOKILAบางปลา"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "Latex",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6000,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6000,
          sourceRow: 425,
          receive: "สหไทย สมุทรปราการ",
          toProvince: "Pathum Thani",
          toCity: "คูบางหลวง",
          toLocation: "Latex",
          send: " LATEX ต. คูบางหลวง ปทุมธานี"
        },
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 427,
          receive: "สหไทย สมุทรปราการ",
          toProvince: "Pathum Thani",
          toCity: "คูบางหลวง",
          toLocation: "Latex",
          send: " LATEX ต. คูบางหลวง ปทุมธานี"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "Latex",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6500,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 6500,
          sourceRow: 426,
          receive: "สหไทย สมุทรปราการ",
          toProvince: "Pathum Thani",
          toCity: "คูบางหลวง",
          toLocation: "Latex",
          send: "ต. คูบางหลวง ปทุมธานี"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6500,
          sourceRow: 425,
          receive: "สหไทย สมุทรปราการ",
          toProvince: "Pathum Thani",
          toCity: "คูบางหลวง",
          toLocation: "Latex",
          send: " LATEX ต. คูบางหลวง ปทุมธานี"
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 6500,
          sourceRow: 424,
          receive: "สหไทย สมุทรปราการ",
          toProvince: "Pathum Thani",
          toCity: "คูบางหลวง",
          toLocation: "Latex",
          send: "คูบางหลวง ปทุมธานี"
        },
        {
          company: "บริษัท C-PRO",
          cost: 6500,
          sourceRow: 427,
          receive: "สหไทย สมุทรปราการ",
          toProvince: "Pathum Thani",
          toCity: "คูบางหลวง",
          toLocation: "Latex",
          send: " LATEX ต. คูบางหลวง ปทุมธานี"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "RONI",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 432,
          receive: "ลานสหไทย",
          toProvince: "Samut Prakan",
          toCity: "กิ่งแก้ว",
          toLocation: "RONI",
          send: "RONI กิ่งแก้ว"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "RONI",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 432,
          receive: "ลานสหไทย",
          toProvince: "Samut Prakan",
          toCity: "กิ่งแก้ว",
          toLocation: "RONI",
          send: "RONI กิ่งแก้ว"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "SIAMETHER FOAM",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 429,
          receive: "C.D.S STORAGE บางพลี",
          toProvince: "Pathum Thani",
          toCity: "สามโคก",
          toLocation: "SIAMETHER FOAM",
          send: "SIAMETHER FOAM สามโคก"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "SIAMETHER FOAM",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 429,
          receive: "C.D.S STORAGE บางพลี",
          toProvince: "Pathum Thani",
          toCity: "สามโคก",
          toLocation: "SIAMETHER FOAM",
          send: "SIAMETHER FOAM สามโคก"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6500,
          sourceRow: 428,
          receive: "C.D.S STORAGE บางพลี",
          toProvince: "Pathum Thani",
          toCity: "สามโคก",
          toLocation: "SIAMETHER FOAM",
          send: "SIAMETHER FOAM สามโคก"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "TB Park",
      vehicleType: "6ล้อเปลือย",
      minCost: 3000,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 3000,
          sourceRow: 417,
          receive: "ท่าBMT",
          toProvince: "BKK",
          toCity: "ธนบุรี",
          toLocation: "TB Park",
          send: "ทีบี พาร์คฝั่งธนบุรี"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "TNT",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5300,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 5300,
          sourceRow: 443,
          receive: "ท่าเรือ UNITHAI",
          toProvince: "Samut Sakhon",
          toCity: "คอกกระบือ",
          toLocation: "TNT",
          send: "TNTคอกกระบือ จ.สมุทรสาคร"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "UNICORD",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6500,
          sourceRow: 444,
          receive: "CMA CGM INLAND",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "UNICORD",
          send: "UNICORDกระทุ่มแบน"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "UNICORD",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7000,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 7000,
          sourceRow: 444,
          receive: "CMA CGM INLAND",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "UNICORD",
          send: "UNICORDกระทุ่มแบน"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "WANNA ONE",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5500,
          sourceRow: 435,
          receive: "CDS CONTAINER",
          toProvince: "Samut Prakan",
          toCity: "บางปลา",
          toLocation: "WANNA ONE",
          send: "WAN NAONE (บางปลา)"
        },
      ],
    },
    {
      from: "Samut Prakan",
      to: "WUS",
      vehicleType: "6 ล้อ",
      minCost: 4000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4000,
          sourceRow: 416,
          receive: "เอสเอสพีโลจิสติกส์บางเสาธง กม.25",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "โกดังเชงเกอร์",
      vehicleType: "6 ล้อ",
      minCost: 2500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2500,
          sourceRow: 540,
          receive: "ท่าเรือคลองเตย",
          toProvince: "LKB",
          toCity: "ลาดกระบัง",
          toLocation: "โกดังเชงเกอร์",
          send: "โกดังเชงเกอร์ ลาดกระบัง"
        },
        {
          company: "บริษัท C-PRO",
          cost: 2500,
          sourceRow: 541,
          receive: "ท่าเรือคลองเตย",
          toProvince: "LKB",
          toCity: "ลาดกระบัง",
          toLocation: "โกดังเชงเกอร์",
          send: "โกดังเชงเกอร์ ลาดกระบัง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "โกดังเชงเกอร์",
      vehicleType: "6ล้อเปลือย",
      minCost: 2500,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 2500,
          sourceRow: 538,
          receive: "ท่าเรือคลองเตย",
          toProvince: "LCB",
          toCity: "ลาดกระบัง",
          toLocation: "โกดังเชงเกอร์",
          send: "โกดังเชงเกอร์ ลาดกระบัง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "โกดังมหานคร",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 800,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 800,
          sourceRow: 621,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "พระราม2",
          toLocation: "โกดังมหานคร",
          send: "โกดังมหานคร พระราม2"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "โกดังอีสด์",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5500,
          sourceRow: 619,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีสด์ กระทุ่มแบน"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 10500,
          sourceRow: 620,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "(จุด1)โกดังอีสด์ กระทุ่มแบน "
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "โกดังอีสด์",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6500,
          sourceRow: 619,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "โกดังอีสด์",
          send: "โกดังอีสด์ กระทุ่มแบน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "คลองสามวา",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1200,
          sourceRow: 486,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "คลองสามวา",
          toLocation: "",
          send: "คลองสามวา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "คลองสามวา",
      vehicleType: "6 ล้อ",
      minCost: 2800,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2800,
          sourceRow: 487,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "คลองสามวา",
          toLocation: "",
          send: "คลองสามวา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "คลองหลวง",
      vehicleType: "6 ล้อ",
      minCost: 3000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 3000,
          sourceRow: 574,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Pathum Thani",
          toCity: "คลองหลวง",
          toLocation: "",
          send: "ZHIHUT คลองหลวง คลอง1"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "คลังศาลายา",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5800,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 5800,
          sourceRow: 547,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "ศาลายา",
          toLocation: "คลังศาลายา",
          send: "คลังศาลายา"
        },
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 549,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "ศาลายา",
          toLocation: "คลังศาลายา",
          send: "คลังศาลายา"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6400,
          sourceRow: 548,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "ศาลายา",
          toLocation: "คลังศาลายา",
          send: "คลังศาลายา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "คลังศาลายา",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6500,
          sourceRow: 548,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "ศาลายา",
          toLocation: "คลังศาลายา",
          send: "คลังศาลายา"
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 6500,
          sourceRow: 547,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "ศาลายา",
          toLocation: "คลังศาลายา",
          send: "คลังศาลายา"
        },
        {
          company: "บริษัท C-PRO",
          cost: 6500,
          sourceRow: 549,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "ศาลายา",
          toLocation: "คลังศาลายา",
          send: "คลังศาลายา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "คูเมือง",
      vehicleType: "6 ล้อ",
      minCost: 9500,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 9500,
          sourceRow: 515,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Burirum",
          toCity: "คูเมือง ",
          toLocation: "",
          send: "ต.คูเมือง จ.บุรีรัมย์"
        },
        {
          company: "บริษัท ซ้ง2K",
          cost: 11500,
          sourceRow: 514,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Burirum",
          toCity: "คูเมือง ",
          toLocation: "",
          send: "ต.คูเมือง จ.บุรีรัมย์"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "เคลียร์แวคเอ็นจิเนียริ่ง จ.ภูเก็ต",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 9500,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 9500,
          sourceRow: 578,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Phuket",
          toCity: "",
          toLocation: "",
          send: "เคลียร์แวคเอ็นจิเนียริ่ง จ.ภูเก็ต"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "งามวงค์วาน",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 900,
          sourceRow: 488,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "งามวงค์วาน",
          toLocation: "",
          send: "งามวงค์วาน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "จ.อุดรธานี",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 6500,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 6500,
          sourceRow: 631,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Udon Thani",
          toCity: "",
          toLocation: "",
          send: "จ.อุดรธานี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ช.การช่าง",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5500,
          sourceRow: 633,
          receive: "ท่าเรือคลองเตย",
          toProvince: "",
          toCity: "",
          toLocation: "",
          send: "ช.การช่าง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ช.การช่าง",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 633,
          receive: "ท่าเรือคลองเตย",
          toProvince: "",
          toCity: "",
          toLocation: "",
          send: "ช.การช่าง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "เชียงใหม่",
      vehicleType: "10 ล้อพื้นเรียบ",
      minCost: 28000,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 28000,
          sourceRow: 525,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chiang Mai",
          toCity: "",
          toLocation: "",
          send: "เชียงใหม่"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ท่าทราย",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 4500,
          sourceRow: 607,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Sakhon",
          toCity: "ท่าทราย",
          toLocation: "",
          send: "ต.ท่าทราย จ.สมุทรสาคร"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "นิคมเวลโกล",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "มานิตย์",
      offers: [
        {
          company: "มานิตย์",
          cost: 1100,
          sourceRow: 522,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "นิคมเวลโกล",
          send: "นิคมอุตสาหกรรมเวลโกล"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "นิคมเวลโกล",
      vehicleType: "6 ล้อ",
      minCost: 3500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 3500,
          sourceRow: 521,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "นิคมเวลโกล",
          send: "นิคมอุตสาหกรรมเวลโกลร์"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "บางบัวทอง",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1200,
          sourceRow: 572,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "บางบัวทอง",
          toLocation: "",
          send: "ต.บางบัวทอง อ.บางบัวทอง จนนทบุรี"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1400,
          sourceRow: 571,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "บางบัวทอง",
          toLocation: "",
          send: "ต.บางบัวทอง อ.บางบัวทอง จนนทบุรี"
        },
        {
          company: "บริษัท ซ้ง2K",
          cost: 1500,
          sourceRow: 570,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "บางบัวทอง",
          toLocation: "",
          send: "ต.บางบัวทอง อ.บางบัวทอง จนนทบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "บางบัวทอง",
      vehicleType: "6 ล้อ",
      minCost: 3300,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 3300,
          sourceRow: 573,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "บางบัวทอง",
          toLocation: "",
          send: "ต.บางบัวทอง อ.บางบัวทอง จ.นนทบุรี"
        },
        {
          company: "บริษัท ซ้ง2K",
          cost: 3500,
          sourceRow: 570,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "บางบัวทอง",
          toLocation: "",
          send: "ต.บางบัวทอง อ.บางบัวทอง จนนทบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "บางปะกง",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7000,
          sourceRow: 523,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chachoengsao",
          toCity: "บางปะกง",
          toLocation: "",
          send: "บางประกง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "บางปะอิน",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 12000,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 12000,
          sourceRow: 467,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "บางปะอิน",
          toLocation: "",
          send: "บางประอิน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "บางพลี",
      vehicleType: "6 ล้อ",
      minCost: 2700,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2700,
          sourceRow: 598,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "",
          send: "บางพลี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "บางสมัคร",
      vehicleType: "6 ล้อ",
      minCost: 3500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 3500,
          sourceRow: 524,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chachoengsao",
          toCity: "บางสมัคร",
          toLocation: "",
          send: "บางสมัครฉะเชิงเทรา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "พระพุทธบาท",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 7500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7500,
          sourceRow: 624,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Saraburi",
          toCity: "พระพุทธบาท",
          toLocation: "พระพุทธบาท",
          send: "โรงโมหิน อ.พระพุทธบาท จ.สระบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "พระพุทธบาท",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7500,
          sourceRow: 623,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Saraburi",
          toCity: "พระพุทธบาท",
          toLocation: "พระพุทธบาท",
          send: "อ.พระพุทธบาท จ.สระบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "พระราม2",
      vehicleType: "6ล้อเปลือย",
      minCost: 1700,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 1700,
          sourceRow: 622,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "พระราม2",
          toLocation: "",
          send: "พระราม2"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ฟาร์มาฮอฟต",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1100,
          sourceRow: 552,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "ฟาร์มาฮอฟต",
          send: "ฟาร์มาฮอฟต.บางเตย อ.สามพราน จ.นครปฐม"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 551,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "ฟาร์มาฮอฟต",
          send: "ฟาร์มาฮอฟต.บางเตย อ.สามพราน จ.นครปฐม"
        },
        {
          company: "มานิตย์",
          cost: 1200,
          sourceRow: 553,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "ฟาร์มาฮอฟต",
          send: "ฟาร์มาฮอฟต.บางเตย อ.สามพราน จ.นครปฐม"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ฟาร์มาฮอฟต",
      vehicleType: "6 ล้อ",
      minCost: 4000,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 4000,
          sourceRow: 550,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "ฟาร์มาฮอฟต",
          send: "ฟาร์มาฮอฟสามพราน นครปฐม"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ฟาร์มาฮอฟต",
      vehicleType: "6ล้อเปลือย",
      minCost: 3000,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 3000,
          sourceRow: 550,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "ฟาร์มาฮอฟต",
          send: "ฟาร์มาฮอฟสามพราน นครปฐม"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ฟาร์มาฮอฟต",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5500,
          sourceRow: 554,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "ฟาร์มาฮอฟต",
          send: "ฟาร์มาฮอฟ   อ.สามพราน จ.นครปฐม"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ฟาร์มาฮอฟต",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 554,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "ฟาร์มาฮอฟต",
          send: "ฟาร์มาฮอฟ   อ.สามพราน จ.นครปฐม"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "แฟมมิลี่",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1300,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1300,
          sourceRow: 485,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "คลองสามวา",
          toLocation: "แฟมมิลี่",
          send: "แฟมมิลี่ คลองสามวา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ยานนาวา",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1100,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1100,
          sourceRow: 503,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "ยานนาวา  ",
          toLocation: "",
          send: "ยานนาวา  "
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ยิบมัน",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 3000,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 3000,
          sourceRow: 561,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Sawan",
          toCity: "หนองบัว",
          toLocation: "ยิบมัน",
          send: "ยิบมัน อ.หนองบัว จ.นครสวรรค์"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ยิบมัน",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 10500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 10500,
          sourceRow: 562,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Sawan",
          toCity: "หนองบัว",
          toLocation: "ยิบมัน",
          send: "ยิบมัน อ.หนองบัว จ.นครสวรรค์"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ยูไนเต็ดฟลาวมิลล์",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 603,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "พระประแดง",
          toLocation: "ยูไนเต็ดฟลาวมิลล์",
          send: "ยูไนเต็ดฟลาวมิลล์"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5000,
          sourceRow: 600,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "พระประแดง",
          toLocation: "ยูไนเต็ดฟลาวมิลล์",
          send: "ยูไนเต็ดฟลาวมิลล์"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ยูไนเต็ดฟลาวมิลล์",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5500,
          sourceRow: 602,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "พระประแดง",
          toLocation: "ยูไนเต็ดฟลาวมิลล์",
          send: "ยูไนเต็ดฟลาวมิลล์(พระประแดง)"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ร.พ.ศรีสังวาลย์ อ.แม่ฮ่องสอน",
      vehicleType: "6 ล้อ",
      minCost: 29000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 29000,
          sourceRow: 542,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Mae Hong Son",
          toCity: "",
          toLocation: "",
          send: "ร.พ.ศรีสังวาลย์ อ.แม่ฮ่องสอน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "รร.อัสสัมชัญ",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6500,
          sourceRow: 532,
          receive: "ท่าเรือกรุงเทพ",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "รร.อัสสัมชัญ",
          send: "สนามกีฬา สิรินธร รร.อัสสัมชัญ ศรีราชา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ริกเกอร์ทรอนิค",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1200,
          sourceRow: 568,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "ไทรน้อย",
          toLocation: "ริกเกอร์ทรอนิค",
          send: "ริกเกอร์ อ.ไทรน้อย จ.นนทบุรี"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 567,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "ไทรน้อย",
          toLocation: "ริกเกอร์ทรอนิค",
          send: "ริกเกอร์ อ.ไทรน้อย จ.นนทบุรี"
        },
        {
          company: "มานิตย์",
          cost: 1300,
          sourceRow: 569,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "ไทรน้อย",
          toLocation: "ริกเกอร์ทรอนิค",
          send: "ริกเกอร์บางกรวย-ไทรน้อย"
        },
        {
          company: "บริษัท นิติธร",
          cost: 1400,
          sourceRow: 545,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "บางเลน",
          toLocation: "ริกเกอร์ทรอนิค",
          send: "ริกเกอร์ทรอนิค อ.บางเลน จ.นครปฐม"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 1400,
          sourceRow: 544,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "บางเลน",
          toLocation: "ริกเกอร์ทรอนิค",
          send: "ริกเกอร์ อ.บางเลน จ.นครปฐม"
        },
        {
          company: "มานิตย์",
          cost: 1400,
          sourceRow: 546,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "บางเลน",
          toLocation: "ริกเกอร์ทรอนิค",
          send: "RIGGERTRONIC อ.บางเลน จ.นครปฐม"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ริกเกอร์ทรอนิค",
      vehicleType: "6ล้อเฮียบ",
      minCost: 6000,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 6000,
          sourceRow: 543,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "บางเลน",
          toLocation: "ริกเกอร์ทรอนิค",
          send: "ริกเกอร์ บางเลน นครปฐม"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ลาดหลุมแก้ว",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1400,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1400,
          sourceRow: 576,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Pathum Thani",
          toCity: "ลาดหลุมแก้ว",
          toLocation: "",
          send: "ลาดหลุมแก้ว"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "วันเนส",
      vehicleType: "6 ล้อ",
      minCost: 2800,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2800,
          sourceRow: 594,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "กิ่งแก้ว",
          toLocation: "วันเนส",
          send: "วันเนส  กิ่งแก้ว"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "วันเนส",
      vehicleType: "10ล้อ",
      minCost: 4500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4500,
          sourceRow: 594,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "กิ่งแก้ว",
          toLocation: "วันเนส",
          send: "วันเนส  กิ่งแก้ว"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ศรีราชา",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1800,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1800,
          sourceRow: 533,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "ศรีราชา",
          send: "MP J DISTRIBUTIONศรีราชา จ.ชลบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "สถานฑูตออสเตรเรีย",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 800,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 800,
          sourceRow: 507,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "วิทยุ",
          toLocation: "สถานฑูตออสเตรเรีย",
          send: "สถานฑูตออสเตรเรีย(ถ.วิทยุ)"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "สาทร",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 700,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 700,
          sourceRow: 508,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "สาทร",
          toLocation: "",
          send: "สาทร"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "สามพราน",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6500,
          sourceRow: 555,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "",
          send: "ซ.วัดสรรเพชร อ.สามพราน จ.นครปฐม"
        },
        {
          company: "บริษัท C-PRO",
          cost: 6500,
          sourceRow: 556,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "",
          send: "ซ.วัดสรรเพชร อ.สามพราน จ.นครปฐม"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "สามพราน",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6500,
          sourceRow: 556,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "",
          send: "ซ.วัดสรรเพชร อ.สามพราน จ.นครปฐม"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 7000,
          sourceRow: 555,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Pathom",
          toCity: "สามพราน",
          toLocation: "",
          send: "ซ.วัดสรรเพชร อ.สามพราน จ.นครปฐม"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "สุคนธสวัสดิ์ซ.28",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 4500,
          sourceRow: 510,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "สุคนธสวัสดิ์ซ.28",
          toLocation: "สุคนธสวัสดิ์ซ.28",
          send: "สุคนธสวัสดิ์ซ.28"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "สุคนธสวัสดิ์ซ.28",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 5000,
          sourceRow: 509,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "สุคนธสวัสดิ์ซ.28",
          toLocation: "สุคนธสวัสดิ์ซ.28",
          send: "สุคนธสวัสดิ์ซ.28"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "สุวรรณญา",
      vehicleType: "6ล้อเปลือย",
      minCost: 2800,
      minCompany: "ไม่ระบุผู้ให้บริการ",
      offers: [
        {
          company: "ไม่ระบุผู้ให้บริการ",
          cost: 2800,
          sourceRow: 629,
          receive: "ท่าเรือคลองเตย",
          toProvince: "SEA BKK",
          toCity: "ท่าเรือคลองเตย",
          toLocation: "สุวรรณญา",
          send: "โรงงาน สุวรรณญา(บางพลี)"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ACHIEVA",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 4500,
          sourceRow: 470,
          receive: "ท่าเรือคลองเตย T1",
          toProvince: "BKK",
          toCity: "ACHIEVA",
          toLocation: "ACHIEVA",
          send: "สุคนสวัสดิ์ ซ.28"
        },
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 471,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "ACHIEVA",
          toLocation: "ACHIEVA",
          send: "ACHIEVA สุคนธสวัสดิ์ 28"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ACHIEVA",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 5000,
          sourceRow: 469,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "ACHIEVA",
          toLocation: "ACHIEVA",
          send: "สุคนสวัสดิ์ ซ.28"
        },
        {
          company: "บริษัท C-PRO",
          cost: 5000,
          sourceRow: 471,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "ACHIEVA",
          toLocation: "ACHIEVA",
          send: "ACHIEVA สุคนธสวัสดิ์ 28"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ADVANCED",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1500,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1500,
          sourceRow: 519,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chachoengsao",
          toCity: "บางน้ำเปรี้ยว ",
          toLocation: "ADVANCED",
          send: "ADVANCEDบางน้ำเปรี้ยว จ.ฉะเชิงเทรา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ADVANCED",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6000,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 6000,
          sourceRow: 518,
          receive: "ท่าเรือคลองเตย T1",
          toProvince: "Chachoengsao",
          toCity: "บางน้ำเปรี้ยว ",
          toLocation: "ADVANCED",
          send: "บางน้ำเปรี้ยว ฉะเชิงเทรา"
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 6000,
          sourceRow: 516,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chachoengsao",
          toCity: "บางน้ำเปรี้ยว ",
          toLocation: "ADVANCED",
          send: "บางน้ำเปรี้ยวADVANCED"
        },
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 520,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chachoengsao",
          toCity: "บางน้ำเปรี้ยว ",
          toLocation: "ADVANCED",
          send: "แอดวานช์ บางน้ำเปรี้ยว"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "ADVANCED",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 520,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chachoengsao",
          toCity: "บางน้ำเปรี้ยว ",
          toLocation: "ADVANCED",
          send: "แอดวานช์ บางน้ำเปรี้ยว"
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 6500,
          sourceRow: 517,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chachoengsao",
          toCity: "บางน้ำเปรี้ยว ",
          toLocation: "ADVANCED",
          send: "แอดวานช์ บางน้ำเปรี้ยว"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "AIMPACK",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 900,
          sourceRow: 478,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "AIMPACKกรุงเทพกรีฑา ซ.33"
        },
        {
          company: "มานิตย์",
          cost: 900,
          sourceRow: 480,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "AIMPACKกรุงเทพกรีฑา ซ.33"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "AIMPACK",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 3400,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 3400,
          sourceRow: 477,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "AIMPACKกรุงเทพกรีฑา ซ.33"
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 3400,
          sourceRow: 472,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "AIMPACKกรุงเทพกีฑา33"
        },
        {
          company: "บริษัท คิงทัส",
          cost: 4500,
          sourceRow: 476,
          receive: "TERMINALท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "กรุงเทพกรีฑา ซ.39"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 4500,
          sourceRow: 475,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "กรุงเทพกีฑา 33"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "AIMPACK",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 4500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 4500,
          sourceRow: 472,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "AIMPACKกรุงเทพกีฑา33"
        },
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 481,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "กรุงเทพกีฑา33"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5000,
          sourceRow: 475,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "กรุงเทพกีฑา 33"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "AIMPACK",
      vehicleType: "NO-PINK",
      minCost: 1400,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 1400,
          sourceRow: 473,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "AIMPACK",
          toLocation: "AIMPACK",
          send: "กรุงเทพกีฑา33"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Air BKK",
      vehicleType: "6 ล้อ",
      minCost: 2500,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 2500,
          sourceRow: 447,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Air BKK",
          toCity: "Air BKK",
          toLocation: "Air BKK",
          send: "JAPAN AIR สมุทรปราการ"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "BIOPHRAM",
      vehicleType: "หัวลากตู้สั้น(ตู้เย็น) 20",
      minCost: 6000,
      minCompany: "บริษัท โขคธีระภัทรตู้เย็น",
      offers: [
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 6000,
          sourceRow: 592,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "BIOPHRAM",
          toLocation: "BIOPHRAM",
          send: "BIOPHRAMบางปู"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "BIOPHRAM",
      vehicleType: "หัวลากตู้ยาว(ตู้เย็น) 40",
      minCost: 6500,
      minCompany: "บริษัท โขคธีระภัทรตู้เย็น",
      offers: [
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 6500,
          sourceRow: 592,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "BIOPHRAM",
          toLocation: "BIOPHRAM",
          send: "BIOPHRAMบางปู"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "BOSON",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 7000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7000,
          sourceRow: 529,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชาชลบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "BOSON",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7500,
          sourceRow: 529,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "BOSON",
          send: "BOSONศรีราชาชลบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "CAMELLIA",
      vehicleType: "6 ล้อ",
      minCost: 2500,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 2500,
          sourceRow: 612,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "CAMELLIA",
          send: "CAMELLIA กระทุ่มแบน"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 4500,
          sourceRow: 615,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "CAMELLIA",
          send: "CAMELLAกระทุ่มแบน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "CAMELLIA",
      vehicleType: "10ล้อ",
      minCost: 5500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5500,
          sourceRow: 615,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "CAMELLIA",
          send: "CAMELLAกระทุ่มแบน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "CAMELLIA",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5500,
          sourceRow: 613,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "CAMELLIA",
          send: "CAMELLAกระทุ่มแบน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "CAMELLIA",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6500,
          sourceRow: 613,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "CAMELLIA",
          send: "CAMELLAกระทุ่มแบน"
        },
        {
          company: "บริษัท คิงทัส",
          cost: 7000,
          sourceRow: 614,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "CAMELLIA",
          send: "CAMELLA กระทุ่มแบน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "CHEV",
      vehicleType: "6 ล้อ",
      minCost: 4000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4000,
          sourceRow: 609,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEV จ.สมุทรสาคร"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "CHEV",
      vehicleType: "10ล้อ",
      minCost: 5000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5000,
          sourceRow: 609,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEV จ.สมุทรสาคร"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "CHEV",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 4500,
          sourceRow: 608,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEVสมุทรสาคร"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "CHEV",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 5500,
          sourceRow: 608,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "CHEV",
          send: "CHEVสมุทรสาคร"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Dynamic",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2500,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 2500,
          sourceRow: 581,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์  ปราจีนบุรี"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 2500,
          sourceRow: 580,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์  ปราจีนบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Dynamic",
      vehicleType: "6 ล้อ",
      minCost: 5000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5000,
          sourceRow: 582,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 583,
          receive: "ท่าเรือชายฝั่ง",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีนบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Dynamic",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 7500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 7500,
          sourceRow: 584,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Dynamic",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 8000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 8000,
          sourceRow: 584,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Prachinburi",
          toCity: "ศรีมหาโพธิ์",
          toLocation: "Dynamic",
          send: "DYNAMICศรีมหาโพธิ์ ปราจีน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "EBM",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 4500,
          sourceRow: 539,
          receive: "ท่าเรือคลองเตย",
          toProvince: "LKB",
          toCity: "ลาดกระบัง",
          toLocation: "EBM",
          send: "EBM ลาดกระบัง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "EBM",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5000,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5000,
          sourceRow: 539,
          receive: "ท่าเรือคลองเตย",
          toProvince: "LKB",
          toCity: "ลาดกระบัง",
          toLocation: "EBM",
          send: "EBM ลาดกระบัง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Fuzion",
      vehicleType: "6 ล้อ",
      minCost: 2500,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 2500,
          sourceRow: 501,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "พระราม9",
          toLocation: "Fuzion",
          send: "FUZION พระราม9"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 2500,
          sourceRow: 502,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "พระราม9",
          toLocation: "Fuzion",
          send: "FUZION พระราม9"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Fuzion",
      vehicleType: "6ล้อเปลือย",
      minCost: 2500,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 2500,
          sourceRow: 501,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "พระราม9",
          toLocation: "Fuzion",
          send: "FUZION พระราม9"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "HANI",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 577,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Pathumthani",
          toCity: "HANI",
          toLocation: "HANI",
          send: "HANI ลำลูกกา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "JAPAN AIR",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 900,
          sourceRow: 595,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "JAPAN  AIR",
          send: "JAPAN  AIR บางพลี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "JLK",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "มานิตย์",
      offers: [
        {
          company: "มานิตย์",
          cost: 900,
          sourceRow: 483,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "คลองเตยเหนือ",
          toLocation: "JLK",
          send: "JLKคลองเตยเหนือ"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "JYXD",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2000,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 2000,
          sourceRow: 526,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chonburi",
          toCity: "บ่อวิน",
          toLocation: "JYXD",
          send: " JYXDศรีราชา จ.ชลบุรี"
        },
        {
          company: "มานิตย์",
          cost: 2200,
          sourceRow: 527,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chonburi",
          toCity: "บ่อวิน",
          toLocation: "JYXD",
          send: "JYXDศรีราชา ชลบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "JYXD",
      vehicleType: "6 ล้อ",
      minCost: 3500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 3500,
          sourceRow: 528,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chonburi",
          toCity: "บ่อวิน",
          toLocation: "JYXD",
          send: "JYXDชลบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Karma",
      vehicleType: "6ล้อเปลือย",
      minCost: 1500,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 1500,
          sourceRow: 494,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "ปุณวิถี44",
          toLocation: "Karma",
          send: "KAMA ซ.ปุณวิถี44 สุขุมวิท"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Karma",
      vehicleType: "6ล้อลิฟท้าย",
      minCost: 3500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 3500,
          sourceRow: 495,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "ปุณวิถี44",
          toLocation: "Karma",
          send: "คาร์มา ซ.ปุณณวิถี สุขุมวิท  (รถลิฟท้าย)"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Karma",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 11000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 11000,
          sourceRow: 558,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Ratchasima",
          toCity: "ขามทะเลสอ",
          toLocation: "Karma",
          send: "คาร์ม่า อ.ขามทะเลจ.นครราชสีมา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Karma",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 12000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 12000,
          sourceRow: 559,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Ratchasima",
          toCity: "ขามทะเลสอ",
          toLocation: "Karma",
          send: "คาร์ม่า อ.ขามทะเลจ.นครราชสีมา"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 14000,
          sourceRow: 557,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nakhon Ratchasima",
          toCity: "ขามทะเลสอ",
          toLocation: "Karma",
          send: "ต.สอทะเลขาม อ.สอทะเลขาม จ.โคราช"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Kinglong",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 4500,
          sourceRow: 593,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "Kinglong",
          toLocation: "Kinglong",
          send: "KINLONG  บางพลี"
        },
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 596,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "Kinglong",
          send: "KINLONG บางพลี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Kinglong",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 4500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 596,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "Kinglong",
          send: "KINLONG บางพลี"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5000,
          sourceRow: 593,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "Kinglong",
          toLocation: "Kinglong",
          send: "KINLONG  บางพลี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "KUSHITANI",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 900,
          sourceRow: 490,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "นาคนิวาส27",
          toLocation: "KUSHITANI",
          send: "KUSHTANIลาดพร้าว"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Latex",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5500,
          sourceRow: 575,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Pathum Thani",
          toCity: "คูบางหลวง",
          toLocation: "Latex",
          send: " LATEX ต. คูบางหลวง ปทุมธานี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Latex",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 575,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Pathum Thani",
          toCity: "คูบางหลวง",
          toLocation: "Latex",
          send: " LATEX ต. คูบางหลวง ปทุมธานี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "LCB",
      vehicleType: "6 ล้อ",
      minCost: 4500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4500,
          sourceRow: 537,
          receive: "ท่าเรือคลองเตย",
          toProvince: "LCB",
          toCity: "LCB",
          toLocation: "LCB",
          send: "แหลมฉบัง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "LIKSANG",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 5500,
          sourceRow: 610,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "LIKSANG",
          send: "LIKSANG  สมุทรสาคร"
        },
        {
          company: "บริษัท C-PRO",
          cost: 5500,
          sourceRow: 611,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Sakhon",
          toCity: "เมือง",
          toLocation: "LIKSANG ",
          send: "LIKSANG  สมุทรสาคร"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "MASTERTERTECH",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1200,
          sourceRow: 489,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "งามวงศ์วาน",
          toLocation: "MASTERTERTECH",
          send: "MASTERTERTECHงามวงศ์วาน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Max Power",
      vehicleType: "6 ล้อ",
      minCost: 2000,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 2000,
          sourceRow: 564,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "Max Power",
          toLocation: "Max Power",
          send: "MEX POWER งามวงค์วาน"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 2500,
          sourceRow: 565,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "Max Power",
          toLocation: "Max Power",
          send: "MEX POWER งามวงค์วาน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Max Power",
      vehicleType: "6ล้อเปลือย",
      minCost: 2200,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 2200,
          sourceRow: 564,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "Max Power",
          toLocation: "Max Power",
          send: "MEX POWER งามวงค์วาน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Max Power",
      vehicleType: "NO-PINK",
      minCost: 1500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 1500,
          sourceRow: 563,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Nonthaburi",
          toCity: "Max Power",
          toLocation: "Max Power",
          send: "MEX POWER งามวงค์วาน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Maxsi",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 3900,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 3900,
          sourceRow: 482,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "Maxsi",
          toLocation: "Maxsi",
          send: "ประชาอุทิศ72 MAXSI"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Maxsi",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 5500,
          sourceRow: 482,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "Maxsi",
          toLocation: "Maxsi",
          send: "ประชาอุทิศ72 MAXSI"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "MAXXIS",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5000,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5000,
          sourceRow: 491,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "ประชาอุทิศ72",
          toLocation: "MAXXIS",
          send: "ประชาอุทิศ72"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "MAXXIS",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5500,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 5500,
          sourceRow: 492,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "ประชาอุทิศ72",
          toLocation: "MAXXIS",
          send: "ประชาอุทิศ72"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5500,
          sourceRow: 491,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "ประชาอุทิศ72",
          toLocation: "MAXXIS",
          send: "ประชาอุทิศ72"
        },
        {
          company: "บริษัท C-PRO",
          cost: 5500,
          sourceRow: 493,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "ประชาอุทิศ72",
          toLocation: "MAXXIS",
          send: "MAXISประชาอุทิศ72"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "MPJ",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "มานิตย์",
      offers: [
        {
          company: "มานิตย์",
          cost: 1200,
          sourceRow: 530,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "MPJ",
          send: "MP J DISTRIBUTIONศรีราชา จ.ชลบุรี"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "NSP",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1400,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1400,
          sourceRow: 605,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "หนามแดง",
          toLocation: "NSP",
          send: "NSPหนามแดง สมุทรปราการ"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "NSP",
      vehicleType: "6 ล้อ",
      minCost: 2800,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2800,
          sourceRow: 606,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "หนามแดง",
          toLocation: "NSP",
          send: "NSP หนามแดง จ.สมทรปราการ"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "OPTIMUS",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 700,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 700,
          sourceRow: 499,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "พระราม3",
          toLocation: "OPTIMUS",
          send: "optimus พระราม3"
        },
        {
          company: "บริษัท นิติธร",
          cost: 1000,
          sourceRow: 500,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "พระราม3",
          toLocation: "OPTIMUS",
          send: "OPTIMUSพระราม3"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "OPTIMUS",
      vehicleType: "6 ล้อ",
      minCost: 1500,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 1500,
          sourceRow: 497,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "พระราม3",
          toLocation: "OPTIMUS",
          send: "OPTIMUS พระราม3"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "OPTIMUS",
      vehicleType: "6ล้อเปลือย",
      minCost: 1500,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 1500,
          sourceRow: 497,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "พระราม3",
          toLocation: "OPTIMUS",
          send: "OPTIMUS พระราม3"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "OPTIMUS",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 3800,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 3800,
          sourceRow: 496,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "พระราม3",
          toLocation: "OPTIMUS",
          send: "OPTIMUS พระราม3"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "OPTIMUS",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 3800,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 3800,
          sourceRow: 498,
          receive: "TERMINAL 2 ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "พระราม3",
          toLocation: "OPTIMUS",
          send: "OPTIMUSพระราม3"
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 4500,
          sourceRow: 496,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "พระราม3",
          toLocation: "OPTIMUS",
          send: "OPTIMUS พระราม3"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Playmondo",
      vehicleType: "6 ล้อ",
      minCost: 1800,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 1800,
          sourceRow: 505,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "โยธินพัฒนา",
          toLocation: "Playmondo",
          send: "โยธินพัฒนาซ.11แยก5"
        },
        {
          company: "บริษัท สีวลีร์",
          cost: 2500,
          sourceRow: 506,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "โยธินพัฒนา",
          toLocation: "Playmondo",
          send: "โยธินพัฒนา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "Playmondo",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4000,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 4000,
          sourceRow: 504,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "โยธินพัฒนา",
          toLocation: "Playmondo",
          send: "PLAYMONDOโยธินพัฒนา 11"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "PPI",
      vehicleType: "6 ล้อ",
      minCost: 4500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4500,
          sourceRow: 465,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "คลองหลวง",
          toLocation: "PPI",
          send: "พีพีไอนิคมอุตสาหกรรม อ.คลองหลวง จ.อยุธยา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "PPI",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 7500,
      minCompany: "บริษัท คิงทัส",
      offers: [
        {
          company: "บริษัท คิงทัส",
          cost: 7500,
          sourceRow: 464,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "คลองหลวง",
          toLocation: "PPI",
          send: "พีพีไอนิคมอุตสาหกรรม อ.คลองหลวง จ.อยุธยา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "PPN",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 900,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 900,
          sourceRow: 604,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "แพรกษา",
          toLocation: "PPN",
          send: "PPNแพรกษา  สมุทรปราการ"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "SAMMITR",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1200,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1200,
          sourceRow: 616,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "SAMMITR ",
          send: "SAMMITR เพชรเกษม ซ.120 "
        },
        {
          company: "มานิตย์",
          cost: 1200,
          sourceRow: 617,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "SAMMITR ",
          send: "SAMMITR เพชรเกษม ซ.120 "
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "SEA BKK",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 600,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 600,
          sourceRow: 626,
          receive: "ท่าเรือคลองเตย",
          toProvince: "SEA BKK",
          toCity: "SEA BKK",
          toLocation: "SEA BKK",
          send: "NYS แถวคลองเตย"
        },
        {
          company: "บริษัท นิติธร",
          cost: 900,
          sourceRow: 627,
          receive: "ท่าเรือคลองเตย",
          toProvince: "SEA BKK",
          toCity: "SEA BKK",
          toLocation: "SEA BKK",
          send: "JLKคลองเตยเหนือ"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "SEA BKK",
      vehicleType: "10ล้อ",
      minCost: 6300,
      minCompany: "บริษัท MEGUS",
      offers: [
        {
          company: "บริษัท MEGUS",
          cost: 6300,
          sourceRow: 585,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Rayong",
          toCity: "SEA BKK",
          toLocation: "SEA BKK",
          send: "XINYA ระยอง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "SEA BKK",
      vehicleType: "NO-PINK",
      minCost: 3500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 3500,
          sourceRow: 625,
          receive: "ท่าเรือคลองเตย",
          toProvince: "SEA BKK",
          toCity: "SEA BKK",
          toLocation: "SEA BKK",
          send: "ท่าเรือคลองเตย"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "SHIZE",
      vehicleType: "6 ล้อ",
      minCost: 2800,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 2800,
          sourceRow: 599,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "พระประแดง",
          toLocation: "SHIZE",
          send: "SHIZE พระประแดง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "SP",
      vehicleType: "6ล้อเปลือย",
      minCost: 2000,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 2000,
          sourceRow: 512,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "หัวหมาก22",
          toLocation: "SP",
          send: "SPหัวหมากซ.22"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "SP",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 4500,
          sourceRow: 511,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "หัวหมาก22",
          toLocation: "SP",
          send: "หัวหมาก22"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5000,
          sourceRow: 513,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "หัวหมาก22",
          toLocation: "SP",
          send: "หัวหมาก22"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "SP",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 5500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 5500,
          sourceRow: 513,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "หัวหมาก22",
          toLocation: "SP",
          send: "หัวหมาก22"
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 5500,
          sourceRow: 511,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "หัวหมาก22",
          toLocation: "SP",
          send: "หัวหมาก22"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "SP",
      vehicleType: "NO-PINK",
      minCost: 1400,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 1400,
          sourceRow: 511,
          receive: "ท่าเรือคลองเตย",
          toProvince: "BKK",
          toCity: "หัวหมาก22",
          toLocation: "SP",
          send: "หัวหมาก22"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "SUNDELL",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 5500,
          sourceRow: 468,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "อุทัย",
          toLocation: "SUNDELL ",
          send: "SUNDELL อ.อุทัย จ.อยุธยา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "SUNDELL",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 468,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "อุทัย",
          toLocation: "SUNDELL ",
          send: "SUNDELL อ.อุทัย จ.อยุธยา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "the Outer Limits",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 4800,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 4800,
          sourceRow: 536,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Khon Kaen",
          toCity: "บ้านไผ่",
          toLocation: "the Outer Limits",
          send: "the Outer Limits ต.เมืองเพีย อ.บ้านไผ่ จ.ขอนแก่น"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 5000,
          sourceRow: 534,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Khon Kaen",
          toCity: "บ้านไผ่",
          toLocation: "the Outer Limits",
          send: "the Outer Limits ต.เมืองเพีย อ.บ้านไผ่ จ.ขอนแก่น"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "T.N.G",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1800,
      minCompany: "บริษัท ปราโมทย์",
      offers: [
        {
          company: "บริษัท ปราโมทย์",
          cost: 1800,
          sourceRow: 531,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Chonburi",
          toCity: "ศรีราชา",
          toLocation: "T.N.G ",
          send: "T.N.G  สนามกีฬา ศรีราชา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "TPI",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 6500,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6500,
          sourceRow: 466,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "คลองหลวง",
          toLocation: "TPI",
          send: "ทีพีไอ ต.บางพระครู อ.นครหลวง จ.อยุธยา"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "WEIDA",
      vehicleType: "6 ล้อ",
      minCost: 5000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5000,
          sourceRow: 579,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Prachinburi",
          toCity: "กบินทร์",
          toLocation: "WEIDA",
          send: "WEIDAปราจีน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "WH กม11.5",
      vehicleType: "6ล้อเปลือย",
      minCost: 2500,
      minCompany: "บริษัท เจนจิรา",
      offers: [
        {
          company: "บริษัท เจนจิรา",
          cost: 2500,
          sourceRow: 597,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut Prakan",
          toCity: "บางพลี",
          toLocation: "WH กม11.5",
          send: "W/Hบางพลี กม.11.5"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "WUS",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 1700,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 1700,
          sourceRow: 456,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "WUS",
      vehicleType: "6 ล้อ",
      minCost: 3300,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 3300,
          sourceRow: 457,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท เจนจิรา",
          cost: 3500,
          sourceRow: 450,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "wusโรจนะ"
        },
        {
          company: "บริษัท C-PRO",
          cost: 3500,
          sourceRow: 462,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "WUS",
      vehicleType: "10ล้อ",
      minCost: 5000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5000,
          sourceRow: 457,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "WUS",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 5500,
      minCompany: "บริษัท นภัทรสร",
      offers: [
        {
          company: "บริษัท นภัทรสร",
          cost: 5500,
          sourceRow: 448,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท C-PRO",
          cost: 5500,
          sourceRow: 460,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท S.B.L.",
          cost: 5500,
          sourceRow: 459,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6000,
          sourceRow: 453,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ "
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 6000,
          sourceRow: 449,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 7000,
          sourceRow: 452,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ (สินค้าอันตราย)"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "WUS",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 6000,
      minCompany: "บริษัท C-PRO",
      offers: [
        {
          company: "บริษัท C-PRO",
          cost: 6000,
          sourceRow: 461,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท S.B.L.",
          cost: 6000,
          sourceRow: 459,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 6500,
          sourceRow: 453,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ "
        },
        {
          company: "บริษัท นภัทรสร",
          cost: 6500,
          sourceRow: 448,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ"
        },
        {
          company: "บริษัท คิงทัส",
          cost: 7000,
          sourceRow: 455,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 7000,
          sourceRow: 452,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSโรจนะ (สินค้าอันตราย)"
        },
        {
          company: "บริษัท MEGUS",
          cost: 12500,
          sourceRow: 458,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUS  นิคมโรจนะ"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "WUS",
      vehicleType: "6ล้อตู้เย็น",
      minCost: 5500,
      minCompany: "บริษัท ซ้ง2K",
      offers: [
        {
          company: "บริษัท ซ้ง2K",
          cost: 5500,
          sourceRow: 454,
          receive: "ท่าเรือคลองเตยโกดัง6",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "WUS",
      vehicleType: "หัวลากตู้สั้น(ตู้เย็น) 20",
      minCost: 8500,
      minCompany: "บริษัท โขคธีระภัทรตู้เย็น",
      offers: [
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 8500,
          sourceRow: 451,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "WUS",
      vehicleType: "หัวลากตู้ยาว(ตู้เย็น) 40",
      minCost: 9000,
      minCompany: "บริษัท โขคธีระภัทรตู้เย็น",
      offers: [
        {
          company: "บริษัท โขคธีระภัทรตู้เย็น",
          cost: 9000,
          sourceRow: 451,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Ayutthaya",
          toCity: "WUS",
          toLocation: "WUS",
          send: "WUSนิคมโรจนะ 2"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "XIE YONG CHEN",
      vehicleType: "10ล้อ",
      minCost: 5000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 5000,
          sourceRow: 618,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Samut sakorn",
          toCity: "กระทุ่มแบน",
          toLocation: "XIE YONG CHEN",
          send: "XIE YONG CHENกระทุ่มแบน"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "xinya",
      vehicleType: "ปิ๊กอัฟ",
      minCost: 2500,
      minCompany: "บริษัท นิติธร",
      offers: [
        {
          company: "บริษัท นิติธร",
          cost: 2500,
          sourceRow: 587,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
        {
          company: "บริษัท ปราโมทย์",
          cost: 2500,
          sourceRow: 586,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
        {
          company: "มานิตย์",
          cost: 2500,
          sourceRow: 590,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "xinya",
      vehicleType: "6 ล้อ",
      minCost: 4500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 4500,
          sourceRow: 588,
          receive: "ท่าเรือคลอง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
        {
          company: "บริษัท MEGUS",
          cost: 5000,
          sourceRow: 589,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "ซินหยา อมตะนคร จ.ระยอง"
        },
        {
          company: "บริษัท C-PRO",
          cost: 5200,
          sourceRow: 591,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYAระยอง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "xinya",
      vehicleType: "10ล้อ",
      minCost: 6500,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 6500,
          sourceRow: 588,
          receive: "ท่าเรือคลอง",
          toProvince: "Rayong",
          toCity: "xinya",
          toLocation: "xinya",
          send: "XINYA ระยอง"
        },
      ],
    },
    {
      from: "SEA BKK",
      to: "YONGPING",
      vehicleType: "6 ล้อ",
      minCost: 15000,
      minCompany: "บริษัท สีวลีร์",
      offers: [
        {
          company: "บริษัท สีวลีร์",
          cost: 15000,
          sourceRow: 630,
          receive: "ท่าเรือคลองเตย",
          toProvince: "Udon Thani",
          toCity: "",
          toLocation: "YONGPING",
          send: "YONGPING  จ.อุดรธานี"
        },
      ],
    },
    {
      from: "Tanarung",
      to: "RONI",
      vehicleType: "หัวลากตู้สั้น 20",
      minCost: 4500,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 4500,
          sourceRow: 634,
          receive: "TANARUNG(2004)บางเสาธง",
          toProvince: "Samut Prakan",
          toCity: "กิ่งแก้ว",
          toLocation: "RONI",
          send: "RONIกิ่งแก้ว"
        },
        {
          company: "บริษัท C-PRO",
          cost: 4500,
          sourceRow: 635,
          receive: "TANARUNG(2004)บางเสาธง",
          toProvince: "Samut Prakan",
          toCity: "กิ่งแก้ว",
          toLocation: "RONI",
          send: "RONIกิ่งแก้ว"
        },
      ],
    },
    {
      from: "Tanarung",
      to: "RONI",
      vehicleType: "หัวลากตู้ยาว 40",
      minCost: 4800,
      minCompany: "บริษัท เชษฐ์พิทักษ์",
      offers: [
        {
          company: "บริษัท เชษฐ์พิทักษ์",
          cost: 4800,
          sourceRow: 634,
          receive: "TANARUNG(2004)บางเสาธง",
          toProvince: "Samut Prakan",
          toCity: "กิ่งแก้ว",
          toLocation: "RONI",
          send: "RONIกิ่งแก้ว"
        },
      ],
    },
  ],
};
