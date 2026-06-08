const roles = [
  { id: "admin", name: "ผู้ดูแลระบบ", scope: "จัดการข้อมูลและรายงานทั้งโรงเรียน" },
  { id: "subject", name: "ครูประจำวิชา", scope: "เช็คชื่อนักเรียนเฉพาะคาบที่สอน" },
  { id: "advisor", name: "ครูที่ปรึกษา", scope: "ดูประวัตินักเรียนในห้องที่รับผิดชอบ" },
  { id: "discipline", name: "ครูเวร / ฝ่ายปกครอง", scope: "ค้นหา บันทึกเจอนอกห้อง และดูนักเรียนเสี่ยง" },
  { id: "executive", name: "ผู้บริหาร", scope: "ดูภาพรวมและสถิติทั้งโรงเรียน" }
];

const teachers = [
  { id: "t01", code: "T001", name: "ครูณัฐพร ศรีสุข", role: "คณิตศาสตร์", phone: "081-111-1001" },
  { id: "t02", code: "T002", name: "ครูภัทรพล มีชัย", role: "วิทยาศาสตร์", phone: "081-111-1002" },
  { id: "t03", code: "T003", name: "ครูอารยา ใจตรง", role: "ภาษาไทย", phone: "081-111-1003" },
  { id: "t04", code: "T004", name: "ครูมานพ แสงดี", role: "ฝ่ายปกครอง", phone: "081-111-1004" },
  { id: "t05", code: "T005", name: "ครูชลธิชา พรหมมา", role: "ภาษาอังกฤษ", phone: "081-111-1005" }
];

const classes = [
  { id: "m1-1", level: "ม.1", room: "1", name: "ม.1/1", advisor: "ครูณัฐพร ศรีสุข", advisorId: "t01" },
  { id: "m2-3", level: "ม.2", room: "3", name: "ม.2/3", advisor: "ครูอารยา ใจตรง", advisorId: "t03" },
  { id: "m4-2", level: "ม.4", room: "2", name: "ม.4/2", advisor: "ครูชลธิชา พรหมมา", advisorId: "t05" }
];

const subjects = [
  { id: "math", code: "MATH", name: "คณิตศาสตร์" },
  { id: "science", code: "SCI", name: "วิทยาศาสตร์" },
  { id: "thai", code: "THAI", name: "ภาษาไทย" },
  { id: "english", code: "ENG", name: "ภาษาอังกฤษ" },
  { id: "computing", code: "COM", name: "วิทยาการคำนวณ" },
  { id: "social", code: "SOC", name: "สังคมศึกษา" },
  { id: "physics", code: "PHY", name: "ฟิสิกส์" },
  { id: "chemistry", code: "CHEM", name: "เคมี" },
  { id: "guidance", code: "GUIDE", name: "แนะแนว" },
  { id: "art", code: "ART", name: "ศิลปะ" }
];

const periods = [
  { no: 1, label: "คาบ 1", start: "08:40", end: "09:30" },
  { no: 2, label: "คาบ 2", start: "09:30", end: "10:20" },
  { no: 3, label: "คาบ 3", start: "10:20", end: "11:10" },
  { no: 4, label: "คาบ 4", start: "12:10", end: "13:00" },
  { no: 5, label: "คาบ 5", start: "13:00", end: "13:50" },
  { no: 6, label: "คาบ 6", start: "13:50", end: "14:40" }
];

const lunchBreak = { label: "พักกลางวัน", start: "11:10", end: "12:10" };

const schedules = {
  "m1-1": {
    1: { subjectId: "math", teacherId: "t01", room: "221" },
    2: { subjectId: "science", teacherId: "t02", room: "Lab 1" },
    3: { subjectId: "thai", teacherId: "t03", room: "203" },
    4: { subjectId: "social", teacherId: "t04", room: "214" },
    5: { subjectId: "english", teacherId: "t05", room: "205" },
    6: { subjectId: "art", teacherId: "t03", room: "Art" }
  },
  "m2-3": {
    1: { subjectId: "thai", teacherId: "t03", room: "303" },
    2: { subjectId: "computing", teacherId: "t02", room: "ห้องคอมพิวเตอร์ 1" },
    3: { subjectId: "math", teacherId: "t01", room: "304" },
    4: { subjectId: "science", teacherId: "t02", room: "Lab 2" },
    5: { subjectId: "english", teacherId: "t05", room: "305" },
    6: { subjectId: "guidance", teacherId: "t04", room: "303" }
  },
  "m4-2": {
    1: { subjectId: "physics", teacherId: "t02", room: "Lab 3" },
    2: { subjectId: "math", teacherId: "t01", room: "421" },
    3: { subjectId: "english", teacherId: "t05", room: "423" },
    4: { subjectId: "thai", teacherId: "t03", room: "424" },
    5: { subjectId: "chemistry", teacherId: "t02", room: "Lab 4" },
    6: { subjectId: "social", teacherId: "t04", room: "422" }
  }
};

const students = [
  { id: "660101", number: 1, name: "ด.ช.ภูมิพัฒน์ ใจดี", classId: "m1-1", guardian: "คุณพัชรี", qr: "QR:660101" },
  { id: "660102", number: 2, name: "ด.ญ.กัญญาพัชร แสงทอง", classId: "m1-1", guardian: "คุณสมนึก", qr: "QR:660102" },
  { id: "660103", number: 3, name: "ด.ช.ธนกฤต สุขมาก", classId: "m1-1", guardian: "คุณลัดดา", qr: "QR:660103" },
  { id: "660104", number: 4, name: "ด.ญ.ชุติมา แก้วใส", classId: "m1-1", guardian: "คุณรัตนา", qr: "QR:660104" },
  { id: "660105", number: 5, name: "ด.ช.นราวิชญ์ ศรีทอง", classId: "m1-1", guardian: "คุณวรพล", qr: "QR:660105" },
  { id: "650301", number: 1, name: "ด.ญ.ปุณยวีร์ จันทร์ดี", classId: "m2-3", guardian: "คุณจันทิมา", qr: "QR:650301" },
  { id: "650302", number: 2, name: "ด.ช.วรเมธ ชาญชัย", classId: "m2-3", guardian: "คุณอำนาจ", qr: "QR:650302" },
  { id: "650303", number: 3, name: "ด.ญ.ณิชาภัทร เกษมสุข", classId: "m2-3", guardian: "คุณอรุณี", qr: "QR:650303" },
  { id: "650304", number: 4, name: "ด.ช.ภาคิน นิลกาล", classId: "m2-3", guardian: "คุณสมชาย", qr: "QR:650304" },
  { id: "650305", number: 5, name: "ด.ญ.มินตรา พรมมา", classId: "m2-3", guardian: "คุณสุรีย์", qr: "QR:650305" },
  { id: "630201", number: 1, name: "นายปกรณ์ วัฒนา", classId: "m4-2", guardian: "คุณพรเทพ", qr: "QR:630201" },
  { id: "630202", number: 2, name: "น.ส.สิริกร พูลทรัพย์", classId: "m4-2", guardian: "คุณประไพ", qr: "QR:630202" },
  { id: "630203", number: 3, name: "นายชยพล เพียรดี", classId: "m4-2", guardian: "คุณสุดา", qr: "QR:630203" },
  { id: "630204", number: 4, name: "น.ส.อินทุอร เรืองศรี", classId: "m4-2", guardian: "คุณอาทิตย์", qr: "QR:630204" },
  { id: "630205", number: 5, name: "นายกิตติธัช ทองแท้", classId: "m4-2", guardian: "คุณนภา", qr: "QR:630205" }
];

const statusText = {
  present: "มาเรียน",
  late: "สาย",
  absent: "ขาด",
  leave: "ลา",
  skip: "โดดเรียน",
  outside: "พบอยู่นอกห้องเรียน",
  unknown: "ยังไม่เช็คชื่อ"
};

const statusTone = {
  present: "present",
  late: "late",
  absent: "absent",
  leave: "leave",
  skip: "skip",
  outside: "outside",
  unknown: "unknown"
};

const icons = {
  "alert-triangle": '<svg class="icon" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  "bar-chart-3": '<svg class="icon" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
  "calendar-days": '<svg class="icon" viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>',
  check: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>',
  "clipboard-check": '<svg class="icon" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>',
  clock: '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  database: '<svg class="icon" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>',
  "door-open": '<svg class="icon" viewBox="0 0 24 24"><path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l5.243-1.31A1 1 0 0 1 13 3.28Z"/></svg>',
  download: '<svg class="icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
  "layout-dashboard": '<svg class="icon" viewBox="0 0 24 24"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>',
  "map-pin": '<svg class="icon" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  "qr-code": '<svg class="icon" viewBox="0 0 24 24"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>',
  "refresh-ccw": '<svg class="icon" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>',
  "scan-line": '<svg class="icon" viewBox="0 0 24 24"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>',
  search: '<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  settings: '<svg class="icon" viewBox="0 0 24 24"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/></svg>',
  "shield-check": '<svg class="icon" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.25-2.72a1.2 1.2 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/></svg>',
  "user-check": '<svg class="icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>',
  "user-x": '<svg class="icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m17 8 5 5"/><path d="m22 8-5 5"/></svg>',
  users: '<svg class="icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
};

const storeKey = "school-attendance-demo-v2";
const ui = {};
let state;

document.addEventListener("DOMContentLoaded", init);

function init() {
  bindElements();
  replaceIcons();
  state = loadState();
  fillSelects();
  setDefaultInputs();
  bindEvents();
  tickClock();
  setInterval(tickClock, 1000);
  render();
}

function bindElements() {
  [
    "todayLabel", "liveClock", "dateInput", "roleSelect", "teacherSelect",
    "classSelect", "periodSelect", "attendanceTime", "attendanceSummary",
    "attendanceList", "periodMeta", "closePeriodBtn", "studentSearch",
    "lookupTime", "lookupResults", "studentProfile", "gateSearch",
    "gateTime", "gateResults", "gateLog", "exportBtn", "resetBtn",
    "reportSummary", "lateReport", "absentReport", "sightingReport",
    "viewTitle", "dashboardSummary", "riskList", "roomStats", "alertFeed",
    "autoRulesBtn", "openAttendanceBtn", "scanMode", "scanTime", "scanInput",
    "scanDemoBtn", "processScanBtn", "scanResult", "guardTime", "guardDevice",
    "guardGps", "managementContent", "periodSettings", "permissionMatrix",
    "schemaList"
  ].forEach((id) => {
    ui[id] = document.getElementById(id);
  });
}

function replaceIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icons[node.dataset.icon] || "";
  });
}

function fillSelects() {
  ui.roleSelect.innerHTML = roles.map((role) => `<option value="${role.id}">${role.name}</option>`).join("");
  ui.teacherSelect.innerHTML = teachers
    .map((teacher) => `<option value="${teacher.id}">${teacher.name} - ${teacher.role}</option>`)
    .join("");
  ui.classSelect.innerHTML = classes.map((classroom) => `<option value="${classroom.id}">${classroom.name}</option>`).join("");
  ui.periodSelect.innerHTML = periods
    .map((period) => `<option value="${period.no}">${period.label} (${period.start}-${period.end})</option>`)
    .join("");
}

function setDefaultInputs() {
  const now = new Date();
  const time = toTimeInput(now);
  ui.dateInput.value = toDateInput(now);
  ui.attendanceTime.value = time;
  ui.lookupTime.value = "09:42";
  ui.gateTime.value = "08:45";
  ui.scanTime.value = time;
  ui.periodSelect.value = (findPeriod(time) || periods[0]).no;
  ui.studentSearch.value = "650302";
  ui.gateSearch.value = "660105";
  ui.scanInput.value = "QR:650302";
  ui.roleSelect.value = "discipline";
  state.selectedStudentId = state.selectedStudentId || "650302";
}

function bindEvents() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  [
    ui.dateInput, ui.roleSelect, ui.teacherSelect, ui.classSelect, ui.periodSelect,
    ui.attendanceTime, ui.studentSearch, ui.lookupTime, ui.gateSearch, ui.gateTime,
    ui.scanMode, ui.scanTime, ui.scanInput, ui.guardTime, ui.guardDevice, ui.guardGps
  ].filter(Boolean).forEach((element) => element.addEventListener("input", render));

  ui.closePeriodBtn.addEventListener("click", closePeriod);
  ui.exportBtn.addEventListener("click", exportCsv);
  ui.resetBtn.addEventListener("click", resetDemo);
  ui.autoRulesBtn.addEventListener("click", () => {
    applyAutoRules(ui.dateInput.value, toTimeInput(new Date()));
    addAlert("system", "ตรวจอัตโนมัติ", "ระบบบันทึกขาดให้นักเรียนที่หมดคาบแล้วยังไม่เช็คชื่อ");
    saveState();
    render();
  });
  ui.openAttendanceBtn.addEventListener("click", () => switchView("attendance"));
  ui.scanDemoBtn.addEventListener("click", () => {
    ui.scanInput.value = "QR:650302";
    render();
  });
  ui.processScanBtn.addEventListener("click", processScan);
  document.querySelectorAll("[data-action='mock-save']").forEach((button) => {
    button.addEventListener("click", () => {
      addAlert("system", "บันทึกข้อมูลตัวอย่าง", "หน้าจัดการข้อมูลเป็นต้นแบบสำหรับเชื่อมฐานข้อมูลจริง");
      saveState();
      render();
    });
  });
}

function switchView(view) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `${view}View`);
  });
  const titles = {
    dashboard: "Dashboard",
    attendance: "เช็คชื่อรายคาบ",
    lookup: "ตรวจเด็กนอกห้อง",
    scan: "สแกน QR Code",
    gate: "ประตูโรงเรียน",
    reports: "รายงาน",
    management: "จัดการข้อมูล",
    settings: "ตั้งค่าระบบ"
  };
  ui.viewTitle.textContent = titles[view] || "ระบบเช็คชื่อ";
  render();
}

function tickClock() {
  const now = new Date();
  ui.todayLabel.textContent = now.toLocaleDateString("th-TH", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  ui.liveClock.textContent = `${toTimeInput(now)} น.`;
}

function loadState() {
  const saved = localStorage.getItem(storeKey);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return {
        attendance: parsed.attendance || {},
        gateLogs: parsed.gateLogs || [],
        sightings: parsed.sightings || [],
        alerts: parsed.alerts || [],
        incidents: parsed.incidents || [],
        selectedStudentId: parsed.selectedStudentId || "650302"
      };
    } catch (error) {
      console.warn("Cannot load saved attendance data", error);
    }
  }
  return seedState();
}

function seedState() {
  const date = toDateInput(new Date());
  const nextState = {
    attendance: {},
    gateLogs: [],
    sightings: [],
    alerts: [],
    incidents: [],
    selectedStudentId: "650302"
  };

  setRecord(nextState, date, "660101", 1, "present", "08:37", "t01", "teacher", "เช็คโดยครูประจำคาบ");
  setRecord(nextState, date, "660102", 1, "late", "08:49", "t01", "gate", "มาหลัง 08:40");
  setRecord(nextState, date, "660103", 1, "present", "08:39", "t01", "teacher", "");
  setRecord(nextState, date, "660104", 1, "leave", "08:30", "t01", "teacher", "ไปแข่งขันวิชาการ");
  setRecord(nextState, date, "660105", 1, "late", "08:52", "t04", "gate", "บันทึกจากประตูโรงเรียน");
  setRecord(nextState, date, "650301", 1, "present", "08:35", "t03", "teacher", "");
  setRecord(nextState, date, "650302", 1, "late", "08:41", "t03", "teacher", "เข้าเรียนหลังเริ่มคาบ");
  setRecord(nextState, date, "650303", 1, "late", "08:46", "t03", "teacher", "");
  setRecord(nextState, date, "650304", 2, "skip", "09:48", "t04", "discipline", "พบเดินอยู่นอกห้องโดยไม่มีบันทึก");
  setRecord(nextState, date, "630201", 1, "present", "08:34", "t02", "teacher", "");
  setRecord(nextState, date, "630202", 1, "late", "08:44", "t02", "teacher", "");
  setRecord(nextState, date, "630203", 1, "absent", "09:31", "t02", "system", "หมดคาบแล้วยังไม่เช็คชื่อ");

  nextState.gateLogs.push(
    { id: createId(), date, time: "07:50", studentId: "650302", status: "present", by: "t04", note: "เข้าโรงเรียนก่อนเริ่มคาบ 1" },
    { id: createId(), date, time: "08:52", studentId: "660105", status: "late", by: "t04", note: "มาหลัง 08:40 ระบบบันทึกสายคาบ 1 อัตโนมัติ" }
  );

  nextState.sightings.push({
    id: createId(),
    date,
    time: "09:42",
    periodNo: 2,
    studentId: "650302",
    location: "ข้างอาคาร 3",
    action: "ส่งแจ้งเตือนครูประจำวิชา",
    by: "t04",
    note: "ยังไม่มีประวัติเข้าเรียนคาบ 2"
  });

  nextState.alerts.push(
    { id: createId(), date, time: "08:52", type: "late", title: "นักเรียนมาสาย", detail: "ด.ช.นราวิชญ์ ศรีทอง มาหลัง 08:40 และถูกบันทึกสายคาบ 1", by: "t04" },
    { id: createId(), date, time: "09:42", type: "skip", title: "เสี่ยงโดดเรียน", detail: "ด.ช.วรเมธ ชาญชัย ถูกพบข้างอาคาร 3 ระหว่างคาบ 2", by: "t04" }
  );

  saveState(nextState);
  return nextState;
}

function setRecord(targetState, date, studentId, periodNo, status, time, teacherId, source, note = "") {
  targetState.attendance[recordKey(date, studentId, periodNo)] = {
    status,
    time,
    by: teacherId,
    source,
    note,
    updatedAt: new Date().toISOString()
  };
}

function saveState(targetState = state) {
  localStorage.setItem(storeKey, JSON.stringify(targetState));
}

function render() {
  renderDashboard();
  renderAttendance();
  renderLookup();
  renderScan();
  renderGate();
  renderReports();
  renderManagement();
  renderSettings();
  replaceIcons();
}

function renderDashboard() {
  const date = ui.dateInput.value;
  const records = recordsForDate(date);
  const counts = countAllStatuses(records);
  const risk = riskStudents(date, toTimeInput(new Date()));
  const outsideCount = state.sightings.filter((sighting) => sighting.date === date).length;

  ui.dashboardSummary.innerHTML = renderSummaryTiles([
    ["นักเรียนทั้งหมด", students.length],
    ["มาเรียน", counts.present],
    ["สาย", counts.late],
    ["ขาด", counts.absent],
    ["โดด/พบนอกห้อง", counts.skip + outsideCount],
    ["นักเรียนเสี่ยง", risk.length]
  ]);

  ui.riskList.innerHTML = risk.length
    ? risk.slice(0, 8).map((item) => renderRiskRow(item)).join("")
    : emptyState();

  const rooms = classes.map((classroom) => {
    const classStudents = students.filter((student) => student.classId === classroom.id);
    const late = classStudents.reduce((sum, student) => sum + periods.filter((period) => getRecord(date, student.id, period.no)?.status === "late").length, 0);
    const skip = classStudents.reduce((sum, student) => sum + periods.filter((period) => getRecord(date, student.id, period.no)?.status === "skip").length, 0);
    return { classroom, late, skip };
  }).sort((a, b) => b.late - a.late || b.skip - a.skip);

  ui.roomStats.innerHTML = rooms.map((row) => `
    <article class="log-row">
      <div class="meta">
        <strong>${row.classroom.name}</strong>
        <small>ครูที่ปรึกษา ${row.classroom.advisor}</small>
      </div>
      <div class="meta">
        <span class="status-pill status-late">สาย ${row.late}</span>
        <small>โดด ${row.skip} รายการ</small>
      </div>
    </article>
  `).join("");

  const alerts = state.alerts.filter((alert) => alert.date === date).slice().reverse();
  ui.alertFeed.innerHTML = alerts.length
    ? alerts.slice(0, 10).map(renderAlertLog).join("")
    : emptyState();
}

function renderRiskRow(item) {
  const student = item.student;
  return `
    <article class="log-row">
      <div class="person">
        <span class="avatar">${initials(student.name)}</span>
        <span>
          <strong>${student.name}</strong>
          <small>${findClass(student.classId).name} | ${item.reason}</small>
        </span>
      </div>
      <div class="meta">
        <span class="status-pill status-skip">เสี่ยงโดด</span>
        <small>${item.periodText}</small>
      </div>
    </article>
  `;
}

function renderAlertLog(alert) {
  return `
    <article class="log-row">
      <div class="meta">
        <strong>${alert.title}</strong>
        <small>${alert.detail}</small>
      </div>
      <div class="meta">
        <span class="status-pill status-${alert.type === "late" ? "late" : "skip"}">${alert.type === "late" ? "สาย" : "แจ้งเตือน"}</span>
        <small>${alert.time} น. | ${findTeacher(alert.by).name}</small>
      </div>
    </article>
  `;
}

function renderAttendance() {
  const date = ui.dateInput.value;
  const classId = ui.classSelect.value;
  const periodNo = Number(ui.periodSelect.value);
  const period = periods.find((item) => item.no === periodNo);
  const schedule = schedules[classId]?.[periodNo];
  const teacher = findTeacher(schedule?.teacherId);
  const subject = findSubject(schedule?.subjectId);
  const classroom = findClass(classId);
  const classStudents = students.filter((student) => student.classId === classId);

  ui.periodMeta.textContent = `${classroom.name} | ${period.label} ${period.start}-${period.end} | ${subject.name} ห้อง ${schedule.room} | ${teacher.name}`;
  const counts = countStatus(classStudents, date, periodNo);
  ui.attendanceSummary.innerHTML = renderSummaryTiles([
    ["นักเรียนทั้งหมด", classStudents.length],
    ["มาเรียน", counts.present],
    ["สาย", counts.late],
    ["ขาด", counts.absent],
    ["โดดเรียน", counts.skip],
    ["ยังไม่เช็ค", counts.unknown]
  ]);

  ui.attendanceList.innerHTML = classStudents.map((student) => {
    const record = getRecord(date, student.id, periodNo);
    const status = record?.status || "unknown";
    const detail = record
      ? `${statusText[status]} เวลา ${record.time} โดย ${findTeacher(record.by).name}${record.note ? ` | ${record.note}` : ""}`
      : `รอเช็คชื่อ ${subject.name} ห้อง ${schedule.room}`;

    return `
      <article class="student-row">
        <div class="person">
          <span class="avatar">${initials(student.name)}</span>
          <div>
            <strong>${student.number}. ${student.name}</strong>
            <small>${student.id} | ${findClass(student.classId).name} | ${student.qr}</small>
          </div>
        </div>
        <div class="meta">
          <span class="status-pill status-${statusTone[status]}">${statusText[status]}</span>
          <small>${detail}</small>
        </div>
        <div class="row-actions">
          <button class="status-button present" type="button" data-action="mark" data-status="auto" data-student="${student.id}">
            <span data-icon="user-check"></span><span>มา</span>
          </button>
          <button class="status-button late" type="button" data-action="mark" data-status="late" data-student="${student.id}">
            <span data-icon="clock"></span><span>สาย</span>
          </button>
          <button class="status-button absent" type="button" data-action="mark" data-status="absent" data-student="${student.id}">
            <span data-icon="user-x"></span><span>ขาด</span>
          </button>
          <button class="status-button excused" type="button" data-action="mark" data-status="leave" data-student="${student.id}">
            <span data-icon="shield-check"></span><span>ลา</span>
          </button>
          <button class="status-button absent" type="button" data-action="mark" data-status="skip" data-student="${student.id}">
            <span data-icon="alert-triangle"></span><span>โดด</span>
          </button>
        </div>
      </article>
    `;
  }).join("");

  ui.attendanceList.querySelectorAll("[data-action='mark']").forEach((button) => {
    button.addEventListener("click", () => markAttendance(button.dataset.student, button.dataset.status));
  });
}

function renderLookup() {
  const query = normalize(ui.studentSearch.value);
  const matches = students.filter((student) => matchesStudent(student, query)).slice(0, 8);

  ui.lookupResults.innerHTML = matches.length
    ? matches.map((student) => renderLookupRow(student, state.selectedStudentId === student.id)).join("")
    : emptyState();

  ui.lookupResults.querySelectorAll("[data-student]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedStudentId = button.dataset.student;
      saveState();
      render();
    });
  });

  const selected = findStudent(state.selectedStudentId) || matches[0] || students[0];
  if (selected && state.selectedStudentId !== selected.id) {
    state.selectedStudentId = selected.id;
    saveState();
  }
  renderStudentProfile(selected);
}

function renderLookupRow(student, isSelected) {
  const classroom = findClass(student.classId);
  return `
    <button class="lookup-row ${isSelected ? "is-selected" : ""}" type="button" data-student="${student.id}">
      <span class="person">
        <span class="avatar">${initials(student.name)}</span>
        <span>
          <strong>${student.name}</strong>
          <small>${student.id} | เลขที่ ${student.number} | ${classroom.name} | ${student.qr}</small>
        </span>
      </span>
      <span class="status-pill status-unknown">เลือก</span>
    </button>
  `;
}

function renderStudentProfile(student) {
  if (!student) {
    ui.studentProfile.innerHTML = emptyState();
    return;
  }

  const date = ui.dateInput.value;
  const time = ui.lookupTime.value || ui.attendanceTime.value;
  const currentPeriod = findPeriod(time);
  const classroom = findClass(student.classId);
  const alert = currentPeriod
    ? renderCurrentAlert(student, currentPeriod, getRecord(date, student.id, currentPeriod.no))
    : `<div class="alert-panel"><span data-icon="clock"></span><div><strong>เวลานี้อยู่นอกช่วงคาบเรียน</strong><br>ระบบยังแสดงตารางทั้งวันเพื่อช่วยตรวจย้อนหลังได้</div></div>`;

  const periodCards = periods.map((period) => {
    const schedule = schedules[student.classId]?.[period.no];
    const subject = findSubject(schedule.subjectId);
    const record = getRecord(date, student.id, period.no);
    const status = record?.status || "unknown";
    const currentClass = currentPeriod?.no === period.no ? "is-current" : "";
    return `
      <article class="period-card ${currentClass}">
        <strong>${period.label}</strong>
        <span>${subject.name}</span>
        <small>${period.start}-${period.end} | ห้อง ${schedule.room}</small>
        <small>${findTeacher(schedule.teacherId).name}</small>
        <span class="status-pill status-${statusTone[status]}">${statusText[status]}</span>
      </article>
    `;
  }).join("");

  ui.studentProfile.innerHTML = `
    <div class="profile-header">
      <span class="avatar">${initials(student.name)}</span>
      <div>
        <h3>${student.name}</h3>
        <p>${student.id} | เลขที่ ${student.number} | ${classroom.name} | ${student.qr}</p>
        <p>ครูที่ปรึกษา ${classroom.advisor} | ผู้ปกครอง ${student.guardian}</p>
      </div>
    </div>
    ${alert}
    <section class="profile-section">
      <h4>ตารางเรียนและสถานะวันนี้</h4>
      <div class="period-grid">${periodCards}</div>
    </section>
    <section class="profile-section">
      <h4>บันทึกการพบตัว / แจ้งเตือน</h4>
      <div class="sighting-form">
        <label>สถานที่พบ
          <input id="sightingLocation" type="text" value="ข้างอาคาร 3" />
        </label>
        <label>การดำเนินการ
          <select id="sightingAction">
            <option>บันทึกว่าเจอนอกห้องเรียน</option>
            <option>ส่งแจ้งเตือนครูประจำวิชา</option>
            <option>ส่งแจ้งเตือนครูที่ปรึกษา</option>
            <option>บันทึกเป็นเหตุการณ์วินัย</option>
          </select>
        </label>
        <label>หมายเหตุ
          <textarea id="sightingNote" placeholder="รายละเอียดเพิ่มเติม"></textarea>
        </label>
        <button id="saveSightingBtn" class="primary-button" type="button">
          <span data-icon="map-pin"></span><span>บันทึกและแจ้งเตือน</span>
        </button>
      </div>
    </section>
  `;

  document.getElementById("saveSightingBtn").addEventListener("click", () => saveSighting(student));
}

function renderCurrentAlert(student, period, record) {
  const schedule = schedules[student.classId]?.[period.no];
  const subject = findSubject(schedule.subjectId);
  const teacher = findTeacher(schedule.teacherId);
  const status = record?.status || "unknown";
  const risky = ["unknown", "absent", "skip", "outside"].includes(status);
  const title = status === "unknown"
    ? `ยังไม่เข้าเรียน ${period.label} / เสี่ยงโดดเรียน`
    : status === "skip"
      ? `ถูกบันทึกโดดเรียน ${period.label}`
      : `สถานะ ${period.label}: ${statusText[status]}`;
  const detail = `${student.name} ควรอยู่ ${subject.name} ห้อง ${schedule.room} กับ ${teacher.name} เวลา ${period.start}-${period.end}`;

  return `
    <div class="alert-panel ${risky ? "is-danger" : ""}">
      <span data-icon="${risky ? "alert-triangle" : "shield-check"}"></span>
      <div><strong>${title}</strong><br>${detail}</div>
    </div>
  `;
}

function renderScan() {
  const input = normalizeScan(ui.scanInput.value);
  const student = findStudent(input);
  const time = ui.scanTime.value || toTimeInput(new Date());
  const period = findPeriod(time);
  const modeText = ui.scanMode.options[ui.scanMode.selectedIndex]?.text || "";

  ui.scanResult.innerHTML = student
    ? `
      <div class="scan-card">
        <span class="avatar">${initials(student.name)}</span>
        <div class="meta">
          <strong>${student.name}</strong>
          <small>${student.id} | ${findClass(student.classId).name} | ${modeText}</small>
          <small>${period ? `${period.label} ${period.start}-${period.end}` : "นอกช่วงคาบเรียน"} | เวลา ${time} น.</small>
        </div>
      </div>
    `
    : `
      <div class="empty-state">
        <span data-icon="qr-code"></span>
        <p>ใส่รหัสหรือ QR นักเรียนเพื่อสแกน</p>
      </div>
    `;
}

function renderGate() {
  const query = normalize(ui.gateSearch.value);
  const matches = students.filter((student) => matchesStudent(student, query)).slice(0, 8);
  ui.gateResults.innerHTML = matches.length
    ? matches.map((student) => {
      const status = minutes(ui.gateTime.value) > minutes(periods[0].start) ? "late" : "present";
      return `
        <article class="lookup-row">
          <span class="person">
            <span class="avatar">${initials(student.name)}</span>
            <span>
              <strong>${student.name}</strong>
              <small>${student.id} | ${findClass(student.classId).name} | ${student.qr}</small>
            </span>
          </span>
          <button class="secondary-button" type="button" data-gate="${student.id}">
            <span data-icon="${status === "late" ? "clock" : "check"}"></span>
            <span>${status === "late" ? "บันทึกสาย" : "บันทึกเข้า"}</span>
          </button>
        </article>
      `;
    }).join("")
    : emptyState();

  ui.gateResults.querySelectorAll("[data-gate]").forEach((button) => {
    button.addEventListener("click", () => markGateArrival(button.dataset.gate, ui.gateTime.value));
  });

  const logs = state.gateLogs.filter((log) => log.date === ui.dateInput.value).slice().reverse();
  ui.gateLog.innerHTML = logs.length ? logs.map(renderGateLog).join("") : emptyState();
}

function renderGateLog(log) {
  const student = findStudent(log.studentId);
  return `
    <article class="log-row">
      <div class="person">
        <span class="avatar">${initials(student.name)}</span>
        <span>
          <strong>${student.name}</strong>
          <small>${findClass(student.classId).name} | ${log.note}</small>
        </span>
      </div>
      <div class="meta">
        <span class="status-pill status-${statusTone[log.status]}">${statusText[log.status]}</span>
        <small>${log.time} น. | ${findTeacher(log.by).name}</small>
      </div>
    </article>
  `;
}

function renderReports() {
  const date = ui.dateInput.value;
  const records = recordsForDate(date);
  const counts = countAllStatuses(records);
  const possible = students.length * periods.length;
  const unknown = Math.max(possible - records.length, 0);

  ui.reportSummary.innerHTML = renderSummaryTiles([
    ["รายการทั้งหมด", possible],
    ["มาเรียน", counts.present],
    ["สาย", counts.late],
    ["ขาด", counts.absent],
    ["โดดเรียน", counts.skip],
    ["ยังไม่เช็ค", unknown]
  ]);

  const lateRecords = records.filter((record) => record.status === "late").sort((a, b) => a.time.localeCompare(b.time));
  const absentRecords = records.filter((record) => record.status === "absent" || record.status === "skip").sort((a, b) => a.periodNo - b.periodNo);
  const sightings = state.sightings.filter((sighting) => sighting.date === date).slice().reverse();

  ui.lateReport.innerHTML = lateRecords.length ? lateRecords.map(renderRecordLog).join("") : emptyState();
  ui.absentReport.innerHTML = absentRecords.length ? absentRecords.map(renderRecordLog).join("") : emptyState();
  ui.sightingReport.innerHTML = sightings.length ? sightings.map(renderSightingLog).join("") : emptyState();
}

function renderRecordLog(record) {
  const student = findStudent(record.studentId);
  const schedule = schedules[student.classId]?.[record.periodNo];
  const subject = findSubject(schedule.subjectId);
  return `
    <article class="log-row">
      <div class="person">
        <span class="avatar">${initials(student.name)}</span>
        <span>
          <strong>${student.name}</strong>
          <small>${findClass(student.classId).name} | คาบ ${record.periodNo} ${subject.name} ห้อง ${schedule.room}</small>
        </span>
      </div>
      <div class="meta">
        <span class="status-pill status-${statusTone[record.status]}">${statusText[record.status]}</span>
        <small>${record.time} น. | ${findTeacher(record.by).name}</small>
      </div>
    </article>
  `;
}

function renderSightingLog(sighting) {
  const student = findStudent(sighting.studentId);
  const schedule = sightingsPeriodSchedule(student, sighting.periodNo);
  return `
    <article class="log-row">
      <div class="person">
        <span class="avatar">${initials(student.name)}</span>
        <span>
          <strong>${student.name}</strong>
          <small>${sighting.location} | ${schedule.subject} | ${sighting.action}</small>
        </span>
      </div>
      <div class="meta">
        <span class="status-pill status-outside">พบตัว</span>
        <small>${sighting.time} น. | ${findTeacher(sighting.by).name}</small>
      </div>
    </article>
  `;
}

function renderManagement() {
  ui.managementContent.innerHTML = [
    managementCard("จัดการนักเรียน", `${students.length} คน`, students.slice(0, 4).map((student) => [student.name, findClass(student.classId).name])),
    managementCard("จัดการครู", `${teachers.length} คน`, teachers.slice(0, 4).map((teacher) => [teacher.name, teacher.role])),
    managementCard("จัดการห้องเรียน", `${classes.length} ห้อง`, classes.map((classroom) => [classroom.name, classroom.advisor])),
    managementCard("จัดการรายวิชา", `${subjects.length} วิชา`, subjects.slice(0, 5).map((subject) => [subject.name, subject.code])),
    managementCard("จัดการตารางสอน", `${classes.length * periods.length} รายการ`, periods.slice(0, 4).map((period) => [period.label, `${period.start}-${period.end}`])),
    managementCard("ตั้งค่าระบบ", "Role / QR / Export", roles.slice(0, 4).map((role) => [role.name, role.scope]))
  ].join("");
}

function managementCard(title, subtitle, rows) {
  return `
    <article class="management-card">
      <h3>${title}</h3>
      <p>${subtitle}</p>
      <div class="mini-table">
        ${rows.map(([left, right]) => `<div class="mini-table-row"><span>${left}</span><span>${right}</span></div>`).join("")}
      </div>
    </article>
  `;
}

function renderSettings() {
  ui.periodSettings.innerHTML = `
    ${periods.map((period) => `
      <article class="log-row">
        <div class="meta">
          <strong>${period.label}</strong>
          <small>ถ้าเช็คหลัง ${period.start} = สาย | หลัง ${period.end} แล้วยังไม่เช็ค = ขาด</small>
        </div>
        <div class="meta">
          <span class="status-pill status-present">${period.start}-${period.end}</span>
          <small>ตั้งค่าได้จากฐานข้อมูล periods</small>
        </div>
      </article>
    `).join("")}
    <article class="log-row">
      <div class="meta">
        <strong>${lunchBreak.label}</strong>
        <small>ไม่นับเป็นคาบเรียน</small>
      </div>
      <div class="meta">
        <span class="status-pill status-unknown">${lunchBreak.start}-${lunchBreak.end}</span>
      </div>
    </article>
  `;

  ui.permissionMatrix.innerHTML = roles.map((role) => `
    <article class="log-row">
      <div class="meta">
        <strong>${role.name}</strong>
        <small>${role.scope}</small>
      </div>
      <div class="meta">
        <span class="status-pill status-present">เปิดใช้</span>
      </div>
    </article>
  `).join("");

  const schema = {
    users: ["id", "name", "email", "password", "role"],
    teachers: ["id", "user_id", "teacher_code", "full_name", "phone"],
    students: ["id", "student_code", "full_name", "classroom_id", "photo", "qr_code", "status"],
    classrooms: ["id", "level", "room", "advisor_teacher_id"],
    subjects: ["id", "subject_code", "subject_name"],
    periods: ["id", "period_no", "start_time", "end_time"],
    timetables: ["id", "classroom_id", "subject_id", "teacher_id", "period_id", "day_of_week", "room_name"],
    attendance: ["id", "student_id", "timetable_id", "attendance_date", "check_time", "status", "checked_by", "note"],
    gate_logs: ["id", "student_id", "scan_time", "scan_type"],
    student_incidents: ["id", "student_id", "incident_type", "incident_time", "location", "description", "reported_by"]
  };

  ui.schemaList.innerHTML = Object.entries(schema).map(([table, columns]) => `
    <article class="schema-card">
      <strong>${table}</strong>
      <code>${columns.join("<br>")}</code>
    </article>
  `).join("");
}

function renderSummaryTiles(items) {
  return items.map(([label, value]) => `
    <article class="summary-tile">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `).join("");
}

function countStatus(classStudents, date, periodNo) {
  return classStudents.reduce((counts, student) => {
    const status = getRecord(date, student.id, periodNo)?.status || "unknown";
    counts[status] += 1;
    return counts;
  }, { present: 0, late: 0, absent: 0, leave: 0, skip: 0, outside: 0, unknown: 0 });
}

function countAllStatuses(records) {
  return records.reduce((counts, record) => {
    counts[record.status] += 1;
    return counts;
  }, { present: 0, late: 0, absent: 0, leave: 0, skip: 0, outside: 0, unknown: 0 });
}

function markAttendance(studentId, requestedStatus) {
  const date = ui.dateInput.value;
  const periodNo = Number(ui.periodSelect.value);
  const time = ui.attendanceTime.value;
  const period = periods.find((item) => item.no === periodNo);
  const status = requestedStatus === "auto"
    ? minutes(time) > minutes(period.start) ? "late" : "present"
    : requestedStatus;
  const note = requestedStatus === "auto" && status === "late" ? `เช็คหลังเวลาเริ่มคาบ ${period.start}` : "";

  setRecord(state, date, studentId, periodNo, status, time, ui.teacherSelect.value, "teacher", note);
  if (status === "late" || status === "skip") {
    addAttendanceAlert(date, time, studentId, periodNo, status);
  }
  saveState();
  render();
}

function closePeriod() {
  const date = ui.dateInput.value;
  const periodNo = Number(ui.periodSelect.value);
  const classStudents = students.filter((student) => student.classId === ui.classSelect.value);
  classStudents.forEach((student) => {
    if (!getRecord(date, student.id, periodNo)) {
      setRecord(state, date, student.id, periodNo, "absent", ui.attendanceTime.value, ui.teacherSelect.value, "teacher", "ปิดคาบแล้วไม่พบในห้อง");
    }
  });
  saveState();
  render();
}

function applyAutoRules(date, time) {
  const nowMins = minutes(time);
  students.forEach((student) => {
    periods.forEach((period) => {
      if (nowMins > minutes(period.end) && !getRecord(date, student.id, period.no)) {
        setRecord(state, date, student.id, period.no, "absent", addMinute(period.end, 1), "t04", "system", "หมดคาบแล้วยังไม่เช็คชื่อ");
      }
    });
  });
}

function saveSighting(student) {
  const date = ui.dateInput.value;
  const time = ui.lookupTime.value;
  const period = findPeriod(time);
  const location = document.getElementById("sightingLocation").value.trim() || "ไม่ระบุสถานที่";
  const action = document.getElementById("sightingAction").value;
  const note = document.getElementById("sightingNote").value.trim();
  state.sightings.push({
    id: createId(),
    date,
    time,
    periodNo: period?.no || 0,
    studentId: student.id,
    location,
    action,
    by: ui.teacherSelect.value,
    note
  });

  if (period) {
    setRecord(state, date, student.id, period.no, "outside", time, ui.teacherSelect.value, "discipline", `${action} | ${location}`);
  }

  addAlert("skip", "พบนักเรียนนอกห้องเรียน", `${student.name} ถูกพบที่ ${location} เวลา ${time} น. (${action})`);
  if (action === "บันทึกเป็นเหตุการณ์วินัย") {
    state.incidents.push({
      id: createId(),
      date,
      time,
      studentId: student.id,
      type: "skip",
      location,
      description: note || "พบอยู่นอกห้องเรียนโดยไม่มีบันทึก",
      by: ui.teacherSelect.value
    });
  }
  saveState();
  switchView("reports");
}

function processScan() {
  const student = findStudent(normalizeScan(ui.scanInput.value));
  const time = ui.scanTime.value || toTimeInput(new Date());
  const date = ui.dateInput.value;
  if (!student) {
    ui.scanResult.innerHTML = `
      <div class="alert-panel is-danger">
        <span data-icon="alert-triangle"></span>
        <div><strong>ไม่พบนักเรียน</strong><br>กรุณาตรวจรหัสหรือ QR Code อีกครั้ง</div>
      </div>
    `;
    replaceIcons(ui.scanResult);
    return;
  }

  if (ui.scanMode.value === "gate") {
    markGateArrival(student.id, time);
    ui.scanResult.innerHTML = scanSuccess(student, `บันทึกเข้าโรงเรียนเวลา ${time} น.`);
    replaceIcons(ui.scanResult);
    return;
  }

  if (ui.scanMode.value === "teacher-card") {
    ui.studentSearch.value = student.id;
    ui.lookupTime.value = time;
    state.selectedStudentId = student.id;
    addAlert("system", "ครูสแกนบัตรนักเรียน", `${findTeacher(ui.teacherSelect.value).name} สแกนบัตร ${student.name}`);
    saveState();
    switchView("lookup");
    return;
  }

  const period = findPeriod(time);
  if (!period) {
    ui.scanResult.innerHTML = `
      <div class="alert-panel">
        <span data-icon="clock"></span>
        <div><strong>นอกช่วงคาบเรียน</strong><br>เวลานี้ไม่สามารถบันทึกเข้าเรียนรายคาบได้</div>
      </div>
    `;
    replaceIcons(ui.scanResult);
    return;
  }

  const status = minutes(time) > minutes(period.start) ? "late" : "present";
  setRecord(state, date, student.id, period.no, status, time, ui.teacherSelect.value, "qr", "บันทึกจาก QR Code รายคาบ");
  if (status === "late") addAttendanceAlert(date, time, student.id, period.no, status);
  saveState();
  render();
  ui.scanResult.innerHTML = scanSuccess(student, `${period.label}: ${statusText[status]} เวลา ${time} น.`);
  replaceIcons(ui.scanResult);
}

function scanSuccess(student, message) {
  return `
    <div class="alert-panel">
      <span data-icon="shield-check"></span>
      <div><strong>บันทึกสำเร็จ</strong><br>${student.name} | ${findClass(student.classId).name}<br>${message}</div>
    </div>
  `;
}

function markGateArrival(studentId, time = ui.gateTime.value) {
  const date = ui.dateInput.value;
  const status = minutes(time) > minutes(periods[0].start) ? "late" : "present";
  const note = status === "late" ? "มาหลัง 08:40 ระบบบันทึกสายคาบ 1 อัตโนมัติ" : "เข้าโรงเรียนก่อนเริ่มคาบ 1";

  state.gateLogs.push({ id: createId(), date, time, studentId, status, by: ui.teacherSelect.value, note });
  setRecord(state, date, studentId, 1, status, time, ui.teacherSelect.value, "gate", note);
  if (status === "late") addAttendanceAlert(date, time, studentId, 1, status);
  saveState();
  render();
}

function addAttendanceAlert(date, time, studentId, periodNo, status) {
  const student = findStudent(studentId);
  const schedule = schedules[student.classId]?.[periodNo];
  const subject = findSubject(schedule.subjectId);
  const title = status === "late" ? "นักเรียนมาสาย" : "นักเรียนโดดเรียน";
  const detail = `${student.name} ${statusText[status]} ${periods.find((period) => period.no === periodNo).label} วิชา${subject.name}`;
  state.alerts.push({ id: createId(), date, time, type: status, title, detail, by: ui.teacherSelect.value });
}

function addAlert(type, title, detail) {
  state.alerts.push({
    id: createId(),
    date: ui.dateInput.value,
    time: toTimeInput(new Date()),
    type,
    title,
    detail,
    by: ui.teacherSelect.value
  });
}

function exportCsv() {
  const date = ui.dateInput.value;
  const rows = [["date", "student_id", "student_name", "class", "period", "subject", "status", "time", "teacher", "source", "note"]];
  recordsForDate(date).forEach((record) => {
    const student = findStudent(record.studentId);
    const schedule = schedules[student.classId]?.[record.periodNo];
    rows.push([
      date,
      student.id,
      student.name,
      findClass(student.classId).name,
      record.periodNo,
      findSubject(schedule.subjectId).name,
      statusText[record.status],
      record.time,
      findTeacher(record.by).name,
      record.source,
      record.note || ""
    ]);
  });

  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `attendance-${date}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function resetDemo() {
  localStorage.removeItem(storeKey);
  state = seedState();
  setDefaultInputs();
  render();
}

function riskStudents(date, time) {
  const current = findPeriod(time);
  const targetPeriod = current || periods.find((period) => minutes(time) > minutes(period.end)) || periods[0];
  return students.map((student) => {
    const hasGate = state.gateLogs.some((log) => log.date === date && log.studentId === student.id);
    const record = getRecord(date, student.id, targetPeriod.no);
    const missingCurrent = hasGate && targetPeriod && !record && minutes(time) >= minutes(targetPeriod.start);
    const skipRecord = periods.find((period) => getRecord(date, student.id, period.no)?.status === "skip");
    const outside = state.sightings.find((sighting) => sighting.date === date && sighting.studentId === student.id);
    if (skipRecord) return { student, reason: "ถูกบันทึกโดดเรียน", periodText: `คาบ ${skipRecord.no}` };
    if (outside) return { student, reason: `พบที่ ${outside.location}`, periodText: outside.periodNo ? `คาบ ${outside.periodNo}` : "นอกคาบ" };
    if (missingCurrent) return { student, reason: "เข้าโรงเรียนแล้วแต่ยังไม่เข้าเรียนรายคาบ", periodText: targetPeriod.label };
    return null;
  }).filter(Boolean);
}

function recordsForDate(date) {
  return Object.entries(state.attendance)
    .filter(([key]) => key.startsWith(`${date}|`))
    .map(([key, record]) => {
      const [, studentId, periodNo] = key.split("|");
      return { ...record, studentId, periodNo: Number(periodNo) };
    });
}

function matchesStudent(student, query) {
  if (!query) return true;
  const classroom = findClass(student.classId);
  return normalize(`${student.id} ${student.qr} ${student.name} ${classroom.name}`).includes(query);
}

function normalize(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, "");
}

function normalizeScan(value) {
  return String(value || "").trim().replace(/^qr:/i, "");
}

function getRecord(date, studentId, periodNo) {
  return state.attendance[recordKey(date, studentId, periodNo)];
}

function recordKey(date, studentId, periodNo) {
  return `${date}|${studentId}|${periodNo}`;
}

function findStudent(studentId) {
  return students.find((student) => student.id === studentId || student.qr.toLowerCase() === String(studentId).toLowerCase());
}

function findTeacher(teacherId) {
  return teachers.find((teacher) => teacher.id === teacherId) || { name: "ไม่ระบุครู", role: "" };
}

function findClass(classId) {
  return classes.find((classroom) => classroom.id === classId) || { name: "ไม่ระบุห้อง", advisor: "-" };
}

function findSubject(subjectId) {
  return subjects.find((subject) => subject.id === subjectId) || { name: "ไม่ระบุวิชา", code: "-" };
}

function findPeriod(time) {
  const current = minutes(time);
  return periods.find((period) => current >= minutes(period.start) && current < minutes(period.end));
}

function sightingsPeriodSchedule(student, periodNo) {
  const schedule = schedules[student.classId]?.[periodNo];
  if (!schedule) return { subject: "นอกช่วงคาบเรียน" };
  return { subject: findSubject(schedule.subjectId).name };
}

function minutes(time) {
  const [hours = "0", mins = "0"] = String(time || "00:00").split(":");
  return Number(hours) * 60 + Number(mins);
}

function addMinute(time, amount) {
  const total = minutes(time) + amount;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function toDateInput(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function toTimeInput(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function initials(name) {
  const clean = name.replace(/^(ด\.ช\.|ด\.ญ\.|นาย|น\.ส\.)/, "").trim();
  return clean.slice(0, 2);
}

function csvCell(value) {
  return `"${String(value ?? "").replace(/"/g, '""')}"`;
}

function createId() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function emptyState() {
  return document.getElementById("emptyTemplate").innerHTML;
}
