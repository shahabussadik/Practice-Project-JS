
const departments = [
  {
    code: "CSE",
    name: "Computer Science & Engineering",
    icon: "⌘",
    subjects: [
      "Structured Programming",
      "Data Structures",
      "Database Management",
      "Computer Networks",
      "Operating Systems",
      "Software Engineering"
    ]
  },
  {
    code: "EEE",
    name: "Electrical & Electronic Engineering",
    icon: "ϟ",
    subjects: [
      "Circuit Analysis",
      "Electronic Devices",
      "Signals & Systems",
      "Power Systems",
      "Digital Logic Design",
      "Control Systems"
    ]
  },
  {
    code: "BBA",
    name: "Business Administration",
    icon: "↗",
    subjects: [
      "Principles of Management",
      "Financial Accounting",
      "Marketing",
      "Business Statistics",
      "Microeconomics",
      "Human Resource Management"
    ]
  },
  {
    code: "ENG",
    name: "English",
    icon: "Aa",
    subjects: [
      "Academic Writing",
      "Introduction to Poetry",
      "English Grammar",
      "Linguistics",
      "Prose & Fiction",
      "Literary Criticism"
    ]
  },
  {
    code: "LAW",
    name: "Law",
    icon: "§",
    subjects: [
      "Jurisprudence",
      "Constitutional Law",
      "Contract Law",
      "Criminal Law",
      "Legal Research",
      "International Law"
    ]
  },
  {
    code: "PHARM",
    name: "Pharmacy",
    icon: "✚",
    subjects: [
      "Pharmaceutical Chemistry",
      "Human Anatomy",
      "Pharmacology",
      "Pharmaceutics",
      "Biochemistry",
      "Microbiology"
    ]
  }
];

let notes = [
  {
    id: 1,
    title: "Data Structures — Linked Lists",
    subject: "Data Structures",
    department: "CSE",
    semester: 3,
    type: "Lecture notes",
    author: "Nafisa Rahman",
    description: "Notes on singly and doubly linked lists, insertion, deletion and exam problems.",
    date: "Today",
    fileData: "",
    fileName: ""
  },
  {
    id: 2,
    title: "Database Normalization Cheat Sheet",
    subject: "Database Management",
    department: "CSE",
    semester: 4,
    type: "Exam prep",
    author: "Arif Hasan",
    description: "Revision notes on 1NF, 2NF, 3NF, BCNF and functional dependencies.",
    date: "Yesterday",
    fileData: "",
    fileName: ""
  },
  {
    id: 3,
    title: "Circuit Analysis — Chapter 02",
    subject: "Circuit Analysis",
    department: "EEE",
    semester: 2,
    type: "Lecture notes",
    author: "Tasnim Akter",
    description: "Kirchhoff's laws, node analysis and mesh analysis.",
    date: "2 days ago",
    fileData: "",
    fileName: ""
  },
  {
    id: 4,
    title: "Principles of Marketing",
    subject: "Marketing",
    department: "BBA",
    semester: 3,
    type: "Exam prep",
    author: "Samiul Islam",
    description: "Key definitions and revision topics for marketing.",
    date: "3 days ago",
    fileData: "",
    fileName: ""
  },
  {
    id: 5,
    title: "Academic Writing: Essay Structure",
    subject: "Academic Writing",
    department: "ENG",
    semester: 1,
    type: "Lecture notes",
    author: "Maliha Noor",
    description: "Essay planning, thesis statements and paragraph structure.",
    date: "4 days ago",
    fileData: "",
    fileName: ""
  },
  {
    id: 6,
    title: "Operating Systems — Scheduling",
    subject: "Operating Systems",
    department: "CSE",
    semester: 5,
    type: "Assignment",
    author: "Rafi Ahmed",
    description: "FCFS, SJF, Priority and Round Robin scheduling examples.",
    date: "5 days ago",
    fileData: "",
    fileName: ""
  }
];

const questions = [
  {
    id: 101,
    title: "Data Structures",
    code: "CSE 221",
    department: "CSE",
    semester: 3,
    year: 2025,
    exam: "Final Examination"
  },
  {
    id: 102,
    title: "Database Management Systems",
    code: "CSE 311",
    department: "CSE",
    semester: 4,
    year: 2024,
    exam: "Midterm Examination"
  },
  {
    id: 103,
    title: "Circuit Analysis",
    code: "EEE 201",
    department: "EEE",
    semester: 2,
    year: 2025,
    exam: "Final Examination"
  },
  {
    id: 104,
    title: "Principles of Marketing",
    code: "BBA 203",
    department: "BBA",
    semester: 3,
    year: 2024,
    exam: "Final Examination"
  },
  {
    id: 105,
    title: "Academic Writing",
    code: "ENG 101",
    department: "ENG",
    semester: 1,
    year: 2025,
    exam: "Midterm Examination"
  },
  {
    id: 106,
    title: "Operating Systems",
    code: "CSE 321",
    department: "CSE",
    semester: 5,
    year: 2023,
    exam: "Final Examination"
  }
];

const students = [
  {
    name: "Nafisa Rahman",
    department: "CSE",
    semester: 3,
    bio: "Turning complex topics into simple notes."
  },
  {
    name: "Arif Hasan",
    department: "CSE",
    semester: 4,
    bio: "Database enthusiast and peer tutor."
  },
  {
    name: "Tasnim Akter",
    department: "EEE",
    semester: 2,
    bio: "Sharing circuit notes."
  },
  {
    name: "Samiul Islam",
    department: "BBA",
    semester: 3,
    bio: "Interested in marketing and business."
  },
  {
    name: "Maliha Noor",
    department: "ENG",
    semester: 1,
    bio: "Words, writing and literature."
  },
  {
    name: "Rafi Ahmed",
    department: "CSE",
    semester: 5,
    bio: "Systems, code and debugging."
  }
];

let currentProfile = {
  name: "Student Contributor",
  department: "CSE",
  semester: "3",
  bio: "Learning something new every day."
};

let selectedDepartment = "CSE";
let savedIds = new Set();

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function initials(name) {
  return String(name || "S")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part[0] || "")
    .join("")
    .toUpperCase();
}

function semesterName(value) {
  const names = {
    1: "1st",
    2: "2nd",
    3: "3rd",
    4: "4th",
    5: "5th",
    6: "6th",
    7: "7th",
    8: "8th"
  };

  return names[Number(value)] || `${value}th`;
}

function departmentInfo(code) {
  return departments.find(dept => dept.code === code) || {
    code,
    name: code,
    icon: "▤",
    subjects: []
  };
}

function getTone(type) {
  if (type === "Assignment") return "orange";
  if (type === "Lab report") return "green";
  if (type === "Exam prep") return "blue";
  return "";
}

function showToast(message, isError = false) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = (isError ? "⚠ " : "✓ ") + message;

  $("#toastRegion").appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

function navigate(view) {
  const validViews = [
    "home",
    "library",
    "questions",
    "departments",
    "profile"
  ];

  if (!validViews.includes(view)) {
    view = "home";
  }

  $$(".view").forEach(section => {
    section.classList.toggle(
      "active-view",
      section.id === `view-${view}`
    );
  });

  $$(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.view === view);
  });

  const labels = {
    home: "Overview",
    library: "Notes library",
    questions: "Previous questions",
    departments: "Departments",
    profile: "Student profiles"
  };

  $("#pageLabel").textContent = labels[view];
  $("#sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openModal(id) {
  const modal = document.getElementById(id);

  if (!modal) return;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);

  if (!modal) return;

  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function openUpload() {
  $("#uploadAuthor").value = currentProfile.name;
  openModal("uploadModal");
}

function renderRecent() {
  const department = $("#homeFilter").dataset.value || "";

  const filtered = notes.filter(note =>
    !department || note.department === department
  );

  $("#recentNotes").innerHTML = filtered.slice(0, 5).map(note => `
    <div class="note-row">
      <div class="note-main">
        <span class="file-icon ${getTone(note.type)}">
          ${escapeHTML(departmentInfo(note.department).icon)}
        </span>
        <div class="note-main-copy">
          <strong>${escapeHTML(note.title)}</strong>
          <span>${escapeHTML(note.type)} · ${escapeHTML(note.date)}</span>
        </div>
      </div>

      <div class="note-author">
        <span class="mini-avatar">${escapeHTML(initials(note.author))}</span>
        <span>${escapeHTML(note.author)}</span>
      </div>

      <button class="row-action" data-note-detail="${note.id}">
        ↗
      </button>
    </div>
  `).join("") || "<p>No notes in this department yet.</p>";

  $("#statNotes").textContent = 128 + notes.length - 6;
  $("#statQuestions").textContent = 46 + questions.length - 6;
}

function renderLibrary() {
  const query = $("#librarySearch").value.trim().toLowerCase();
  const department = $("#departmentFilter").value;
  const semester = $("#semesterFilter").value;
  const type = $("#typeFilter").value;

  const filtered = notes.filter(note => {
    const searchable = [
      note.title,
      note.subject,
      note.author,
      note.description,
      note.department,
      note.type
    ].join(" ").toLowerCase();

    return (
      (!query || searchable.includes(query)) &&
      (!department || note.department === department) &&
      (!semester || String(note.semester) === semester) &&
      (!type || note.type === type)
    );
  });

  $("#resultCount").textContent =
    `Showing ${filtered.length} of ${notes.length} notes`;

  $("#libraryGrid").innerHTML = filtered.map(note => `
    <article class="library-card">
      <div class="library-card-top">
        <span class="file-icon ${getTone(note.type)}">
          ${escapeHTML(departmentInfo(note.department).icon)}
        </span>

        <button class="bookmark-button ${savedIds.has(note.id) ? "saved" : ""}"
          data-save-note="${note.id}">
          ${savedIds.has(note.id) ? "★" : "☆"}
        </button>
      </div>

      <h3>${escapeHTML(note.title)}</h3>
      <p class="card-description">
        ${escapeHTML(note.description || "Shared campus resource.")}
      </p>

      <div class="card-tags">
        <span class="pill">${escapeHTML(note.department)}</span>
        <span class="pill">${semesterName(note.semester)} semester</span>
        <span class="pill ${getTone(note.type)}">${escapeHTML(note.type)}</span>
      </div>

      <div class="card-bottom">
        <div class="card-author">
          <span class="mini-avatar">${escapeHTML(initials(note.author))}</span>
          <span>${escapeHTML(note.author)}</span>
        </div>
        <button class="card-open" data-note-detail="${note.id}">
          View note ↗
        </button>
      </div>
    </article>
  `).join("");

  $("#libraryEmpty").classList.toggle("hidden", filtered.length > 0);
  $("#libraryGrid").classList.toggle("hidden", filtered.length === 0);
}

function renderQuestions() {
  const query = $("#questionSearch").value.trim().toLowerCase();
  const department = $("#questionDept").value;
  const semester = $("#questionSemester").value;

  const filtered = questions.filter(question => {
    const searchable =
      `${question.title} ${question.code} ${question.year}`.toLowerCase();

    return (
      (!query || searchable.includes(query)) &&
      (!department || question.department === department) &&
      (!semester || String(question.semester) === semester)
    );
  });

  $("#questionGrid").innerHTML = filtered.map(question => `
    <article class="question-card">
      <div class="question-card-top">
        <span class="question-paper-icon">▧</span>
        <span class="pill orange">${question.year}</span>
      </div>

      <h3>${escapeHTML(question.title)}</h3>
      <p>${escapeHTML(question.code)} · ${escapeHTML(question.exam)}</p>

      <div class="question-meta">
        <span class="pill">${escapeHTML(question.department)}</span>
        <span class="pill">${semesterName(question.semester)} semester</span>
      </div>

      <button class="btn btn-outline" data-question-detail="${question.id}">
        View paper details ↗
      </button>
    </article>
  `).join("");

  $("#questionEmpty").classList.toggle("hidden", filtered.length > 0);
  $("#questionGrid").classList.toggle("hidden", filtered.length === 0);
}

function renderDepartments() {
  $("#departmentFullGrid").innerHTML = departments.map(dept => `
    <button class="department-full-card" data-department="${dept.code}">
      <span class="dept-symbol">${dept.icon}</span>
      <h3>${escapeHTML(dept.name)}</h3>
      <p>${dept.code} · 8 semesters</p>
    </button>
  `).join("");

  $("#zoneTitle").textContent = `${selectedDepartment} semester zones`;

  $("#semesterGrid").innerHTML = Array.from(
    { length: 8 },
    (_, index) => index + 1
  ).map(semester => {
    const count = notes.filter(note =>
      note.department === selectedDepartment &&
      Number(note.semester) === semester
    ).length;

    return `
      <button class="semester-button" data-semester="${semester}">
        <strong>${semesterName(semester)} semester</strong>
        <span>${count} notes · Browse subjects</span>
      </button>
    `;
  }).join("");
}

function renderSubjectZone(semester) {
  const dept = departmentInfo(selectedDepartment);

  $("#subjectZoneTitle").textContent =
    `${semesterName(semester)} semester · ${dept.code} subjects`;

  $("#subjectCards").innerHTML = dept.subjects.map(subject => {
    const count = notes.filter(note =>
      note.department === dept.code &&
      Number(note.semester) === Number(semester) &&
      note.subject.toLowerCase() === subject.toLowerCase()
    ).length;

    return `
      <article class="subject-card">
        <strong>${escapeHTML(subject)}</strong>
        <p>${count} matching notes</p>
        <button
          data-subject-browse="${escapeHTML(subject)}"
          data-subject-dept="${dept.code}"
          data-subject-sem="${semester}">
          Browse resources ↗
        </button>
      </article>
    `;
  }).join("");

  $("#subjectZone").classList.remove("hidden");

  $$(".semester-button").forEach(button => {
    button.classList.toggle(
      "selected",
      button.dataset.semester === String(semester)
    );
  });
}

function renderProfile() {
  $("#profileName").textContent = currentProfile.name;
  $("#profileBio").textContent = currentProfile.bio;
  $("#profileDeptTag").textContent = currentProfile.department;
  $("#profileSemTag").textContent =
    `${semesterName(currentProfile.semester)} semester`;

  $("#profileInitial").textContent =
    initials(currentProfile.name).slice(0, 1);

  $("#topProfile").textContent =
    initials(currentProfile.name).slice(0, 1);

  $("#myUploads").textContent = notes.filter(
    note => note.author === currentProfile.name
  ).length;

  $("#studentGrid").innerHTML = students.map(student => `
    <article class="student-card">
      <div class="student-avatar">${escapeHTML(initials(student.name))}</div>
      <h3>${escapeHTML(student.name)}</h3>
      <p>${escapeHTML(student.bio)}</p>
      <div class="card-tags">
        <span class="pill">${student.department}</span>
        <span class="pill">${semesterName(student.semester)} sem</span>
      </div>
    </article>
  `).join("");
}

function renderAll() {
  renderRecent();
  renderLibrary();
  renderQuestions();
  renderDepartments();
  renderProfile();
}

function showNoteDetail(id) {
  const note = notes.find(item => item.id === Number(id));

  if (!note) return;

  $("#detailTitle").textContent = note.title;

  $("#detailBody").innerHTML = `
    <p>${escapeHTML(note.description || "No description provided.")}</p>

    <div class="detail-facts">
      <div class="detail-fact">
        <span>Department</span>
        <strong>${escapeHTML(note.department)}</strong>
      </div>
      <div class="detail-fact">
        <span>Semester</span>
        <strong>${semesterName(note.semester)} semester</strong>
      </div>
      <div class="detail-fact">
        <span>Subject</span>
        <strong>${escapeHTML(note.subject)}</strong>
      </div>
      <div class="detail-fact">
        <span>Contributor</span>
        <strong>${escapeHTML(note.author)}</strong>
      </div>
    </div>

    <p>
      ${note.fileData
        ? "Your uploaded file is available in this browser session."
        : "This is a demo entry without an attached document."}
    </p>
  `;

  const download = $("#downloadLink");

  if (note.fileData) {
    download.href = note.fileData;
    download.download = note.fileName;
    download.classList.remove("hidden");
  } else {
    download.classList.add("hidden");
    download.removeAttribute("href");
  }

  openModal("detailModal");
}

function showQuestionDetail(id) {
  const question = questions.find(item => item.id === Number(id));

  if (!question) return;

  $("#detailTitle").textContent =
    `${question.title} · ${question.year}`;

  $("#detailBody").innerHTML = `
    <p>This is a sample previous-question listing.</p>

    <div class="detail-facts">
      <div class="detail-fact">
        <span>Course code</span>
        <strong>${escapeHTML(question.code)}</strong>
      </div>
      <div class="detail-fact">
        <span>Department</span>
        <strong>${escapeHTML(question.department)}</strong>
      </div>
      <div class="detail-fact">
        <span>Semester</span>
        <strong>${semesterName(question.semester)} semester</strong>
      </div>
      <div class="detail-fact">
        <span>Year</span>
        <strong>${question.year}</strong>
      </div>
    </div>

    <p>No actual question paper file is attached to this sample.</p>
  `;

  $("#downloadLink").classList.add("hidden");
  openModal("detailModal");
}

function browseSubject(subject, department, semester) {
  $("#librarySearch").value = subject;
  $("#departmentFilter").value = department;
  $("#semesterFilter").value = semester;
  $("#typeFilter").value = "";

  navigate("library");
  renderLibrary();

  showToast(`Showing resources for ${subject}.`);
}

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}

function saveNote(data, file, fileData) {
  notes.unshift({
    id: Date.now(),
    title: data.get("title").trim(),
    subject: data.get("subject").trim(),
    department: data.get("department"),
    semester: Number(data.get("semester")),
    type: data.get("type"),
    author: data.get("author").trim(),
    description: String(data.get("description") || "").trim(),
    date: "Just now",
    fileName: file ? file.name : "",
    fileData
  });
}

$$("[data-view]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    navigate(link.dataset.view);
  });
});

$$("[data-open-view]").forEach(button => {
  button.addEventListener("click", () => {
    navigate(button.dataset.openView);
  });
});

$("#heroUpload").addEventListener("click", openUpload);
$("#libraryUpload").addEventListener("click", openUpload);
$("#sidebarUpload").addEventListener("click", openUpload);
$("#emptyUpload").addEventListener("click", openUpload);
$("#exploreLibrary").addEventListener("click", () => navigate("library"));
$("#topProfile").addEventListener("click", () => navigate("profile"));

$("#mobileMenu").addEventListener("click", () => {
  $("#sidebar").classList.toggle("open");
});

$("#notifications").addEventListener("click", () => {
  showToast("You're all caught up.");
});

$("#homeFilter").addEventListener("click", () => {
  const options = ["", "CSE", "EEE", "BBA", "ENG", "LAW", "PHARM"];
  const current = $("#homeFilter").dataset.value || "";
  const next = options[(options.indexOf(current) + 1) % options.length];

  $("#homeFilter").dataset.value = next;
  $("#homeFilter").textContent =
    next ? `${next} ⌄` : "All departments⌄";

  renderRecent();
});

$("#globalSearch").addEventListener("keydown", event => {
  if (event.key === "Enter") {
    navigate("library");
    $("#librarySearch").value = event.target.value;
    renderLibrary();
  }
});

$("#librarySearch").addEventListener("input", renderLibrary);

["departmentFilter", "semesterFilter", "typeFilter"].forEach(id => {
  $("#" + id).addEventListener("change", renderLibrary);
});

["questionSearch", "questionDept", "questionSemester"].forEach(id => {
  const eventName = id === "questionSearch" ? "input" : "change";
  $("#" + id).addEventListener(eventName, renderQuestions);
});

$("#uploadForm").addEventListener("submit", async event => {
  event.preventDefault();

  const form = event.currentTarget;

  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const file = data.get("file");

  if (file && file.size > 10 * 1024 * 1024) {
    showToast("Choose a file smaller than 10 MB.", true);
    return;
  }

  try {
    const fileData = file && file.size
      ? await fileToDataURL(file)
      : "";

    saveNote(data, file && file.size ? file : null, fileData);

    closeModal("uploadModal");
    form.reset();

    renderAll();
    navigate("library");

    showToast("Your note was added to this demo library.");
  } catch (error) {
    showToast("Could not read the file. Try another file.", true);
  }
});

$("#editProfile").addEventListener("click", () => {
  const form = $("#profileForm");

  form.elements.name.value = currentProfile.name;
  form.elements.department.value = currentProfile.department;
  form.elements.semester.value = currentProfile.semester;
  form.elements.bio.value = currentProfile.bio;

  openModal("profileModal");
});

$("#profileForm").addEventListener("submit", event => {
  event.preventDefault();

  const form = event.currentTarget;

  currentProfile = {
    name: form.elements.name.value.trim(),
    department: form.elements.department.value,
    semester: form.elements.semester.value,
    bio: form.elements.bio.value.trim()
  };

  closeModal("profileModal");

  renderProfile();
  renderRecent();

  $("#uploadAuthor").value = currentProfile.name;

  showToast("Your profile was updated for this demo.");
});

$("#closeZone").addEventListener("click", () => {
  $("#semesterZone").classList.add("hidden");
  $("#subjectZone").classList.add("hidden");
});

document.addEventListener("click", event => {
  const closeButton = event.target.closest("[data-close]");

  if (closeButton) {
    closeModal(closeButton.dataset.close);
    return;
  }

  if (event.target.classList.contains("modal-backdrop")) {
    closeModal(event.target.id);
    return;
  }

  const departmentButton = event.target.closest("[data-department]");

  if (departmentButton) {
    selectedDepartment = departmentButton.dataset.department;

    if (departmentButton.closest("#homeDepartments")) {
      navigate("departments");
    }

    $("#semesterZone").classList.remove("hidden");
    $("#subjectZone").classList.add("hidden");

    renderDepartments();

    $("#semesterZone").scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

    return;
  }

  const semesterButton = event.target.closest("[data-semester]");

  if (semesterButton) {
    renderSubjectZone(semesterButton.dataset.semester);
    return;
  }

  const subjectButton = event.target.closest("[data-subject-browse]");

  if (subjectButton) {
    browseSubject(
      subjectButton.dataset.subjectBrowse,
      subjectButton.dataset.subjectDept,
      subjectButton.dataset.subjectSem
    );
    return;
  }

  const noteButton = event.target.closest("[data-note-detail]");

  if (noteButton) {
    showNoteDetail(noteButton.dataset.noteDetail);
    return;
  }

  const questionButton = event.target.closest("[data-question-detail]");

  if (questionButton) {
    showQuestionDetail(questionButton.dataset.questionDetail);
    return;
  }

  const saveButton = event.target.closest("[data-save-note]");

  if (saveButton) {
    const id = Number(saveButton.dataset.saveNote);

    if (savedIds.has(id)) {
      savedIds.delete(id);
      showToast("Note removed from saved items.");
    } else {
      savedIds.add(id);
      showToast("Note saved to demo bookmarks.");
    }

    renderLibrary();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    $$(".modal-backdrop:not(.hidden)").forEach(modal => {
      closeModal(modal.id);
    });
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    $("#globalSearch").focus();
  }
});

renderAll();
