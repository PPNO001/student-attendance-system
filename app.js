const teachers = [
  { id: "t01", name: "ครูณัฐพร ศรีสุข", role: "คณิตศาสตร์" },
  { id: "t02", name: "ครูภัทรพล มีชัย", role: "วิทยาศาสตร์" },
  { id: "t03", name: "ครูอารยา ใจตรง", role: "ภาษาไทย" },
  { id: "t04", name: "ครูมานพ แสงดี", role: "งานปกครอง" },
  { id: "t05", name: "ครูชลธิชา พรหมมา", role: "ภาษาอังกฤษ" }
];

const classes = [
  { id: "m1-1", name: "ม.1/1", advisor: "ครูณัฐพร ศรีสุข" },
  { id: "m2-3", name: "ม.2/3", advisor: "ครูอารยา ใจตรง" },
  { id: "m4-2", name: "ม.4/2", advisor: "ครูชลธิชา พรหมมา" }
];

const periods = [
  { no: 1, label: "คาบ 1", start: "08:40", end: "09:30" },
  { no: 2, label: "คาบ 2", start: "09:30", end: "10:20" },
  { no: 3, label: "คาบ 3", start: "10:20", end: "11:10" },
  { no: 4, label: "คาบ 4", start: "11:10", end: "12:00" },
  { no: 5, label: "คาบ 5", start: "13:00", end: "13:50" },
  { no: 6, label: "คาบ 6", start: "13:50", end: "14:40" },
  { no: 7, label: "คาบ 7", start: "14:40", end: "15:30" },
  { no: 8, label: "คาบ 8", start: "15:30", end: "16:20" }
];

const schedules = {
  "m1-1": {
    1: { subject: "คณิตศาสตร์", teacherId: "t01", room: "221" },
    2: { subject: "วิทยาศาสตร์", teacherId: "t02", room: "Lab 1" },
    3: { subject: "ภาษาไทย", teacherId: "t03", room: "203" },
    4: { subject: "สังคมศึกษา", teacherId: "t04", room: "214" },
    5: { subject: "ภาษาอังกฤษ", teacherId: "t05", room: "205" },
    6: { subject: "ศิลปะ", teacherId: "t03", room: "Art" },
    7: { subject: "สุขศึกษา", teacherId: "t04", room: "Gym" },
    8: { subject: "ชุมนุม", teacherId: "t01", room: "Hall" }
  },
  "m2-3": {
    1: { subject: "ภาษาไทย", teacherId: "t03", room: "303" },
    2: { subject: "คณิตศาสตร์", teacherId: "t01", room: "304" },
    3: { subject: "ภาษาอังกฤษ", teacherId: "t05", room: "305" },
    4: { subject: "วิทยาศาสตร์", teacherId: "t02", room: "Lab 2" },
    5: { subject: "ประวัติศาสตร์", teacherId: "t04", room: "302" },
    6: { subject: "คอมพิวเตอร์", teacherId: "t02", room: "Com 1" },
    7: { subject: "แนะแนว", teacherId: "t04", room: "303" },
    8: { subject: "กิจกรรม", teacherId: "t03", room: "ลานกิจกรรม" }
  },
  "m4-2": {
    1: { subject: "ฟิสิกส์", teacherId: "t02", room: "Lab 3" },
    2: { subject: "คณิตเพิ่มเติม", teacherId: "t01", room: "421" },
    3: { subject: "อังกฤษอ่านเขียน", teacherId: "t05", room: "423" },
    4: { subject: "ภาษาไทย", teacherId: "t03", room: "424" },
    5: { subject: "เคมี", teacherId: "t02", room: "Lab 4" },
    6: { subject: "สังคมศึกษา", teacherId: "t04", room: "422" },
    7: { subject: "พลศึกษา", teacherId: "t04", room: "Gym" },
    8: { subject: "โครงงาน", teacherId: "t05", room: "Maker" }
  }
};

const students = [
  { id: "660101", number: 1, name: "ด.ช.ภูมิพัฒน์ ใจดี", classId: "m1-1", guardian: "คุณพัชรี" },
  { id: "660102", number: 2, name: "ด.ญ.กัญญาพัชร แสงทอง", classId: "m1-1", guardian: "คุณสมนึก" },
  { id: "660103", number: 3, name: "ด.ช.ธนกฤต สุขมาก", classId: "m1-1", guardian: "คุณลัดดา" },
  { id: "660104", number: 4, name: "ด.ญ.ชุติมา แก้วใส", classId: "m1-1", guardian: "คุณรัตนา" },
  { id: "660105", number: 5, name: "ด.ช.นราวิชญ์ ศรีทอง", classId: "m1-1", guardian: "คุณวรพล" },
  { id: "650301", number: 1, name: "ด.ญ.ปุณยวีร์ จันทร์ดี", classId: "m2-3", guardian: "คุณจันทิมา" },
  { id: "650302", number: 2, name: "ด.ช.วรเมธ ชาญชัย", classId: "m2-3", guardian: "คุณอำนาจ" },
  { id: "650303", number: 3, name: "ด.ญ.ณิชาภัทร เกษมสุข", classId: "m2-3", guardian: "คุณอรุณี" },
  { id: "650304", number: 4, name: "ด.ช.ภาคิน นิลกาล", classId: "m2-3", guardian: "คุณสมชาย" },
  { id: "650305", number: 5, name: "ด.ญ.มินตรา พรมมา", classId: "m2-3", guardian: "คุณสุรีย์" },
  { id: "630201", number: 1, name: "นายปกรณ์ วัฒนา", classId: "m4-2", guardian: "คุณพรเทพ" },
  { id: "630202", number: 2, name: "น.ส.สิริกร พูลทรัพย์", classId: "m4-2", guardian: "คุณประไพ" },
  { id: "630203", number: 3, name: "นายชยพล เพียรดี", classId: "m4-2", guardian: "คุณสุดา" },
  { id: "630204", number: 4, name: "น.ส.อินทุอร เรืองศรี", classId: "m4-2", guardian: "คุณอาทิตย์" },
  { id: "630205", number: 5, name: "นายกิตติธัช ทองแท้", classId: "m4-2", guardian: "คุณนภา" }
];

const statusText = {
  present: "มาเรียน",
  late: "สาย",
  absent: "ขาด/โดด",
  excused: "ลา/กิจกรรม",
  unmarked: "ยังไม่เช็ค"
};

const icons = {
  "alert-triangle": '<svg class="icon" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  "bar-chart-3": '<svg class="icon" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
  "calendar-days": '<svg class="icon" viewBox="0 0 24 24"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>',
  "check": '<svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>',
  "clipboard-check": '<svg class="icon" viewBox="0 0 24 24"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>',
  "clock": '<svg class="icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  "door-open": '<svg class="icon" viewBox="0 0 24 24"><path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l5.243-1.31A1 1 0 0 1 13 3.28Z"/></svg>',
  "download": '<svg class="icon" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
  "map-pin": '<svg class="icon" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  "refresh-ccw": '<svg class="icon" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>',
  "search": '<svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  "shield-check": '<svg class="icon" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.25-2.72a1.2 1.2 0 0 1 1.5 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1Z"/><path d="m9 12 2 2 4-4"/></svg>',
  "user-check": '<svg class="icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></svg>',
  "user-x": '<svg class="icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m17 8 5 5"/><path d="m22 8-5 5"/></svg>',
  "users": '<svg class="icon" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
};

const storeKey = "school-attendance-demo-v1";
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
    "todayLabel",
    "liveClock",
    "dateInput",
    "teacherSelect",
    "classSelect",
    "periodSelect",
    "attendanceTime",
    "attendanceSummary",
    "attendanceList",
    "periodMeta",
    "closePeriodBtn",
    "studentSearch",
    "lookupTime",
    "lookupResults",
    "studentProfile",
    "gateSearch",
    "gateTime",
    "gateResults",
    "gateLog",
    "exportBtn",
    "resetBtn",
    "reportSummary",
    "lateReport",
    "absentReport",
    "sightingReport",
    "viewTitle"
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
  ui.teacherSelect.innerHTML = teachers
    .map((teacher) => `<option value="${teacher.id}">${teacher.name} - ${teacher.role}</option>`)
    .join("");

  ui.classSelect.innerHTML = classes
    .map((classroom) => `<option value="${classroom.id}">${classroom.name}</option>`)
    .join("");

  ui.periodSelect.innerHTML = periods
    .map((period) => `<option value="${period.no}">${period.label} (${period.start}-${period.end})</option>`)
    .join("");
}

function setDefaultInputs() {
  const now = new Date();
  ui.dateInput.value = toDateInput(now);
  const time = toTimeInput(now);
  ui.attendanceTime.value = time;
  ui.lookupTime.value = time;
  ui.gateTime.value = "08:45";
  const current = findPeriod(time) || periods[0];
  ui.periodSelect.value = current.no;
  ui.studentSearch.value = "650302";
  ui.gateSearch.value = "660105";
  state.selectedStudentId = state.selectedStudentId || "650302";
}

function bindEvents() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  [
    ui.dateInput,
    ui.teacherSelect,
    ui.classSelect,
    ui.periodSelect,
    ui.attendanceTime,
    ui.studentSearch,
    ui.lookupTime,
    ui.gateSearch,
    ui.gateTime
  ].forEach((element) => element.addEventListener("input", render));

  ui.closePeriodBtn.addEventListener("click", closePeriod);
  ui.exportBtn.addEventListener("click", exportCsv);
  ui.resetBtn.addEventListener("click", resetDemo);
}

function switchView(view) {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.view === view);
  });
  document.querySelectorAll(".view").forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === `${view}View`);
  });
  const titles = {
    attendance: "เช็คชื่อรายคาบ",
    lookup: "ตรวจเด็กนอกห้อง",
    gate: "ประตูโรงเรียน",
    reports: "รายงาน"
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
      return JSON.parse(saved);
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
    selectedStudentId: "650302"
  };

  setRecord(nextState, date, "660101", 1, "present", "08:37", "t01", "teacher", "เช็คโดยครูประจำคาบ");
  setRecord(nextState, date, "660102", 1, "late", "08:49", "t01", "gate", "มาหลัง 08:40");
  setRecord(nextState, date, "660103", 1, "present", "08:39", "t01", "teacher", "");
  setRecord(nextState, date, "660104", 1, "excused", "08:30", "t01", "teacher", "ไปแข่งขันวิชาการ");
  setRecord(nextState, date, "660105", 1, "late", "08:52", "t04", "gate", "บันทึกจากประตูโรงเรียน");
  setRecord(nextState, date, "650301", 1, "present", "08:35", "t03", "teacher", "");
  setRecord(nextState, date, "650302", 1, "present", "08:36", "t03", "teacher", "");
  setRecord(nextState, date, "650302", 2, "absent", "09:36", "t01", "teacher", "ไม่พบในห้องเรียน");
  setRecord(nextState, date, "650303", 1, "late", "08:46", "t03", "teacher", "");
  setRecord(nextState, date, "650304", 1, "present", "08:38", "t03", "teacher", "");
  setRecord(nextState, date, "630201", 1, "present", "08:34", "t02", "teacher", "");
  setRecord(nextState, date, "630202", 1, "late", "08:44", "t02", "teacher", "");
  setRecord(nextState, date, "630203", 1, "absent", "08:48", "t02", "teacher", "ขาดคาบแรก");

  nextState.gateLogs.push({
    id: createId(),
    date,
    time: "08:52",
    studentId: "660105",
    status: "late",
    by: "t04",
    note: "ระบบบันทึกสายคาบ 1 อัตโนมัติ"
  });

  nextState.sightings.push({
    id: createId(),
    date,
    time: "09:42",
    periodNo: 2,
    studentId: "650302",
    location: "ข้างอาคาร 3",
    action: "ส่งกลับห้องเรียน",
    by: "t04",
    note: "ระบบแจ้งว่าขาดคาบ 2 วิชาคณิตศาสตร์"
  });

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
  renderAttendance();
  renderLookup();
  renderGate();
  renderReports();
  replaceIcons();
}

function renderAttendance() {
  const date = ui.dateInput.value;
  const classId = ui.classSelect.value;
  const periodNo = Number(ui.periodSelect.value);
  const period = periods.find((item) => item.no === periodNo);
  const schedule = schedules[classId]?.[periodNo];
  const teacher = findTeacher(schedule?.teacherId);
  const classroom = findClass(classId);
  const classStudents = students.filter((student) => student.classId === classId);

  ui.periodMeta.textContent = `${classroom.name} | ${period.label} ${period.start}-${period.end} | ${schedule.subject} ห้อง ${schedule.room} | ${teacher.name}`;

  const counts = countStatus(classStudents, date, periodNo);
  ui.attendanceSummary.innerHTML = renderSummaryTiles([
    ["นักเรียนทั้งหมด", classStudents.length],
    ["มาเรียน", counts.present],
    ["สาย", counts.late],
    ["ขาด/โดด", counts.absent],
    ["ยังไม่เช็ค", counts.unmarked]
  ]);

  ui.attendanceList.innerHTML = classStudents
    .map((student) => {
      const record = getRecord(date, student.id, periodNo);
      const status = record?.status || "unmarked";
      const rowSchedule = schedules[student.classId]?.[periodNo];
      const detail = record
        ? `${statusText[status]} เวลา ${record.time} โดย ${findTeacher(record.by).name}`
        : `รอเช็คชื่อ ${rowSchedule.subject} ห้อง ${rowSchedule.room}`;

      return `
        <article class="student-row">
          <div class="person">
            <span class="avatar">${initials(student.name)}</span>
            <div>
              <strong>${student.number}. ${student.name}</strong>
              <small>${student.id} | ${findClass(student.classId).name}</small>
            </div>
          </div>
          <div class="meta">
            <span class="status-pill status-${status}">${statusText[status]}</span>
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
              <span data-icon="user-x"></span><span>โดด</span>
            </button>
            <button class="status-button excused" type="button" data-action="mark" data-status="excused" data-student="${student.id}">
              <span data-icon="shield-check"></span><span>ลา</span>
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  ui.attendanceList.querySelectorAll("[data-action='mark']").forEach((button) => {
    button.addEventListener("click", () => {
      markAttendance(button.dataset.student, button.dataset.status);
    });
  });
}

function renderLookup() {
  const query = normalize(ui.studentSearch.value);
  const matches = students
    .filter((student) => matchesStudent(student, query))
    .slice(0, 8);

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
          <small>${student.id} | เลขที่ ${student.number} | ${classroom.name}</small>
        </span>
      </span>
      <span class="status-pill status-unmarked">เลือก</span>
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
  const currentSchedule = currentPeriod ? schedules[student.classId]?.[currentPeriod.no] : null;
  const currentRecord = currentPeriod ? getRecord(date, student.id, currentPeriod.no) : null;
  const alert = currentPeriod
    ? renderCurrentAlert(student, currentPeriod, currentSchedule, currentRecord)
    : `<div class="alert-panel"><span data-icon="clock"></span><div><strong>เวลานี้อยู่นอกช่วงคาบเรียน</strong><br>ระบบยังแสดงตารางทั้งวันเพื่อช่วยตรวจย้อนหลังได้</div></div>`;

  const periodCards = periods
    .map((period) => {
      const schedule = schedules[student.classId]?.[period.no];
      const record = getRecord(date, student.id, period.no);
      const status = record?.status || "unmarked";
      const currentClass = currentPeriod?.no === period.no ? "is-current" : "";
      return `
        <article class="period-card ${currentClass}">
          <strong>${period.label}</strong>
          <span>${schedule.subject}</span>
          <small>${period.start}-${period.end} | ห้อง ${schedule.room}</small>
          <small>${findTeacher(schedule.teacherId).name}</small>
          <span class="status-pill status-${status}">${statusText[status]}</span>
        </article>
      `;
    })
    .join("");

  ui.studentProfile.innerHTML = `
    <div class="profile-header">
      <span class="avatar">${initials(student.name)}</span>
      <div>
        <h3>${student.name}</h3>
        <p>${student.id} | เลขที่ ${student.number} | ${classroom.name}</p>
        <p>ครูที่ปรึกษา ${classroom.advisor} | ผู้ปกครอง ${student.guardian}</p>
      </div>
    </div>
    ${alert}
    <section class="profile-section">
      <h4>ตารางเรียนและสถานะวันนี้</h4>
      <div class="period-grid">${periodCards}</div>
    </section>
    <section class="profile-section">
      <h4>บันทึกการพบตัว</h4>
      <div class="sighting-form">
        <label>สถานที่พบ
          <input id="sightingLocation" type="text" value="ข้างอาคาร 3" />
        </label>
        <label>การดำเนินการ
          <select id="sightingAction">
            <option>ส่งกลับห้องเรียน</option>
            <option>แจ้งครูประจำคาบ</option>
            <option>ส่งงานปกครอง</option>
            <option>แจ้งครูที่ปรึกษา</option>
          </select>
        </label>
        <label>หมายเหตุ
          <textarea id="sightingNote" placeholder="รายละเอียดเพิ่มเติม"></textarea>
        </label>
        <button id="saveSightingBtn" class="primary-button" type="button">
          <span data-icon="map-pin"></span><span>บันทึกการพบตัว</span>
        </button>
      </div>
    </section>
  `;

  document.getElementById("saveSightingBtn").addEventListener("click", () => saveSighting(student));
}

function renderCurrentAlert(student, period, schedule, record) {
  const status = record?.status || "unmarked";
  const teacher = findTeacher(schedule.teacherId);
  const isRisk = status === "absent" || status === "unmarked";
  const title = status === "absent"
    ? `นักเรียนถูกบันทึกขาด/โดด ${period.label}`
    : status === "unmarked"
      ? `ยังไม่มีการเช็คชื่อ ${period.label}`
      : `สถานะ ${period.label}: ${statusText[status]}`;
  const detail = `${student.name} ควรอยู่ ${schedule.subject} ห้อง ${schedule.room} กับ ${teacher.name} เวลา ${period.start}-${period.end}`;

  return `
    <div class="alert-panel ${isRisk ? "is-danger" : ""}">
      <span data-icon="${isRisk ? "alert-triangle" : "shield-check"}"></span>
      <div><strong>${title}</strong><br>${detail}</div>
    </div>
  `;
}

function renderGate() {
  const query = normalize(ui.gateSearch.value);
  const matches = students.filter((student) => matchesStudent(student, query)).slice(0, 8);
  ui.gateResults.innerHTML = matches.length
    ? matches
      .map((student) => {
        const status = minutes(ui.gateTime.value) > minutes(periods[0].start) ? "late" : "present";
        return `
          <article class="lookup-row">
            <span class="person">
              <span class="avatar">${initials(student.name)}</span>
              <span>
                <strong>${student.name}</strong>
                <small>${student.id} | ${findClass(student.classId).name}</small>
              </span>
            </span>
            <button class="secondary-button" type="button" data-gate="${student.id}">
              <span data-icon="${status === "late" ? "clock" : "check"}"></span>
              <span>${status === "late" ? "บันทึกสาย" : "บันทึกเข้า"}</span>
            </button>
          </article>
        `;
      })
      .join("")
    : emptyState();

  ui.gateResults.querySelectorAll("[data-gate]").forEach((button) => {
    button.addEventListener("click", () => markGateArrival(button.dataset.gate));
  });

  const logs = state.gateLogs.filter((log) => log.date === ui.dateInput.value).slice().reverse();
  ui.gateLog.innerHTML = logs.length
    ? logs.map((log) => renderGateLog(log)).join("")
    : emptyState();
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
        <span class="status-pill status-${log.status}">${statusText[log.status]}</span>
        <small>${log.time} น. | ${findTeacher(log.by).name}</small>
      </div>
    </article>
  `;
}

function renderReports() {
  const date = ui.dateInput.value;
  const records = Object.entries(state.attendance)
    .filter(([key]) => key.startsWith(`${date}|`))
    .map(([key, record]) => {
      const [, studentId, periodNo] = key.split("|");
      return { ...record, studentId, periodNo: Number(periodNo) };
    });

  const possible = students.length * periods.length;
  const counts = records.reduce(
    (acc, record) => {
      acc[record.status] += 1;
      return acc;
    },
    { present: 0, late: 0, absent: 0, excused: 0 }
  );
  const unmarked = Math.max(possible - records.length, 0);

  ui.reportSummary.innerHTML = renderSummaryTiles([
    ["รายการทั้งหมด", possible],
    ["มาเรียน", counts.present],
    ["สาย", counts.late],
    ["ขาด/โดด", counts.absent],
    ["ยังไม่เช็ค", unmarked]
  ]);

  const lateRecords = records
    .filter((record) => record.status === "late")
    .sort((a, b) => a.time.localeCompare(b.time));
  const absentRecords = records
    .filter((record) => record.status === "absent")
    .sort((a, b) => a.periodNo - b.periodNo || a.studentId.localeCompare(b.studentId));
  const sightings = state.sightings
    .filter((sighting) => sighting.date === date)
    .slice()
    .reverse();

  ui.lateReport.innerHTML = lateRecords.length
    ? lateRecords.map((record) => renderRecordLog(record)).join("")
    : emptyState();
  ui.absentReport.innerHTML = absentRecords.length
    ? absentRecords.map((record) => renderRecordLog(record)).join("")
    : emptyState();
  ui.sightingReport.innerHTML = sightings.length
    ? sightings.map((sighting) => renderSightingLog(sighting)).join("")
    : emptyState();
}

function renderRecordLog(record) {
  const student = findStudent(record.studentId);
  const schedule = schedules[student.classId]?.[record.periodNo];
  return `
    <article class="log-row">
      <div class="person">
        <span class="avatar">${initials(student.name)}</span>
        <span>
          <strong>${student.name}</strong>
          <small>${findClass(student.classId).name} | คาบ ${record.periodNo} ${schedule.subject} ห้อง ${schedule.room}</small>
        </span>
      </div>
      <div class="meta">
        <span class="status-pill status-${record.status}">${statusText[record.status]}</span>
        <small>${record.time} น. | ${findTeacher(record.by).name}</small>
      </div>
    </article>
  `;
}

function renderSightingLog(sighting) {
  const student = findStudent(sighting.studentId);
  const schedule = schedules[student.classId]?.[sighting.periodNo];
  return `
    <article class="log-row">
      <div class="person">
        <span class="avatar">${initials(student.name)}</span>
        <span>
          <strong>${student.name}</strong>
          <small>${sighting.location} | ${schedule?.subject || "นอกคาบ"} | ${sighting.action}</small>
        </span>
      </div>
      <div class="meta">
        <span class="status-pill status-unmarked">พบตัว</span>
        <small>${sighting.time} น. | ${findTeacher(sighting.by).name}</small>
      </div>
    </article>
  `;
}

function renderSummaryTiles(items) {
  return items
    .map(([label, value]) => `
      <article class="summary-tile">
        <span>${label}</span>
        <strong>${value}</strong>
      </article>
    `)
    .join("");
}

function countStatus(classStudents, date, periodNo) {
  return classStudents.reduce(
    (counts, student) => {
      const record = getRecord(date, student.id, periodNo);
      counts[record?.status || "unmarked"] += 1;
      return counts;
    },
    { present: 0, late: 0, absent: 0, excused: 0, unmarked: 0 }
  );
}

function markAttendance(studentId, requestedStatus) {
  const date = ui.dateInput.value;
  const periodNo = Number(ui.periodSelect.value);
  const time = ui.attendanceTime.value;
  const period = periods.find((item) => item.no === periodNo);
  const status = requestedStatus === "auto"
    ? minutes(time) > minutes(period.start) ? "late" : "present"
    : requestedStatus;
  const note = requestedStatus === "auto" && status === "late"
    ? `เช็คหลังเวลาเริ่มคาบ ${period.start}`
    : "";

  setRecord(state, date, studentId, periodNo, status, time, ui.teacherSelect.value, "teacher", note);
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
  saveState();
  switchView("reports");
}

function markGateArrival(studentId) {
  const date = ui.dateInput.value;
  const time = ui.gateTime.value;
  const status = minutes(time) > minutes(periods[0].start) ? "late" : "present";
  const note = status === "late"
    ? "มาหลัง 08:40 ระบบบันทึกสายคาบ 1 อัตโนมัติ"
    : "เข้าโรงเรียนก่อนเริ่มคาบ 1";

  state.gateLogs.push({
    id: createId(),
    date,
    time,
    studentId,
    status,
    by: ui.teacherSelect.value,
    note
  });

  setRecord(state, date, studentId, 1, status, time, ui.teacherSelect.value, "gate", note);
  saveState();
  render();
}

function exportCsv() {
  const date = ui.dateInput.value;
  const rows = [["date", "student_id", "student_name", "class", "period", "subject", "status", "time", "teacher", "source", "note"]];
  Object.entries(state.attendance)
    .filter(([key]) => key.startsWith(`${date}|`))
    .forEach(([key, record]) => {
      const [, studentId, periodNoText] = key.split("|");
      const student = findStudent(studentId);
      const periodNo = Number(periodNoText);
      const schedule = schedules[student.classId]?.[periodNo];
      rows.push([
        date,
        student.id,
        student.name,
        findClass(student.classId).name,
        periodNo,
        schedule.subject,
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

function matchesStudent(student, query) {
  if (!query) return true;
  const classroom = findClass(student.classId);
  return normalize(`${student.id} ${student.name} ${classroom.name}`).includes(query);
}

function normalize(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, "");
}

function getRecord(date, studentId, periodNo) {
  return state.attendance[recordKey(date, studentId, periodNo)];
}

function recordKey(date, studentId, periodNo) {
  return `${date}|${studentId}|${periodNo}`;
}

function findStudent(studentId) {
  return students.find((student) => student.id === studentId);
}

function findTeacher(teacherId) {
  return teachers.find((teacher) => teacher.id === teacherId) || { name: "ไม่ระบุครู", role: "" };
}

function findClass(classId) {
  return classes.find((classroom) => classroom.id === classId) || { name: "ไม่ระบุห้อง", advisor: "-" };
}

function findPeriod(time) {
  const current = minutes(time);
  return periods.find((period) => current >= minutes(period.start) && current < minutes(period.end));
}

function minutes(time) {
  const [hours = "0", mins = "0"] = String(time || "00:00").split(":");
  return Number(hours) * 60 + Number(mins);
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
