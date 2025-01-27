export function Student(data) {
    return {
        student_id: data.student_id,
        name: data.name,
        contact: data.contact,
        dob: data.dob,
        guardians_name: data.guardians_name,
        address: data.address,
        session: data.session,
        std_id: data.std_id,
        std_pass: data.std_pass
    }
}

export function Teacher(data) {
    return {
        teacher_id: data.teacher_id,
        email: data.email,
        name: data.name,
        subjects: data.subjects,
        session: data.session
    }
}

export function Admin(data) {
    return {
        admin_id: data.admin_id,
        email: data.email,
        session: data.session,
        name: data.name
    }
}

export function Attendance(data) {
    return {
        attendance_id: data.attendance_id,
        date: data.date,
        student_ids: data.student_ids
    }
}

export function Marks(data) {
    return {
        marks_id: data.marks_id,
        subject_id: data.subject_id,
        student_id: data.student_id,
        marks: data.marks
    }
}

export function Subject(data) {
    return {
        subject_id: data.subject_id,
        subject_name: data.subject_name
    }
}

export function Notice(data) {
    return {
        notice_id: data.notice_id,
        date: data.date,
        content: data.content
    }
}
