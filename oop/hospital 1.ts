class Person {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Patient extends Person {
  patientID: number;
  constructor(firstName: string, lastName: string, patientID: number) {
    super(firstName, lastName);
    this.patientID = patientID;
  }
  getInfo() {
    return this.firstName, this.lastName, this.patientID;
  }
}

class Doctor extends Person {
  doctorID: number;
  specialization: string;
  constructor(
    firstName: string,
    lastName: string,
    doctorID: number,
    specialization: string
  ) {
    super(firstName, lastName);
    this.doctorID = doctorID;
    this.specialization = specialization;
  }
  getInfo() {
    return this.firstName, this.lastName, this.doctorID, this.specialization;
  }
}

class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;
  constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }
  getInfo() {
    return this.patient.getInfo(), this.doctor.getInfo(), this.date, this.time;
  }
}

class Hospital {
  hospitalName: string;
  patients: Patient[];
  doctors: Doctor[];
  appointments: Appointment[];
  constructor(
    hospitalName: string,
    patients: Patient[],
    doctors: Doctor[],
    appointments: Appointment[]
  ) {
    this.hospitalName = hospitalName;
    this.patients = patients;
    this.doctors = doctors;
    this.appointments = appointments;
  }
  addPatient(patient: Patient) {
    this.patients.push(patient);
    return this.patients;
  }
  addDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
    return this.doctors;
  }
  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    return this.appointments;
  }
  getAllAppointments() {
    return this.appointments;
  }
  getAppointmentByDrID(id: number) {
    return this.appointments.filter(
      (appointment) => appointment.doctor.doctorID === id
    );
  }
  getAppointmentByPatientID(id: number) {
    return this.appointments.filter(
      (appointment) => appointment.patient.patientID === id
    );
  }

  getAppointmentByDate(date: string) {
    return this.appointments.filter((appointment) => appointment.date === date);
  }
}

const patientsArray: Patient[] = [
  new Patient("Alice", "Johnson", 1),
  new Patient("Bob", "Smith", 2),
  new Patient("Eve", "Miller", 3),
  new Patient("David", "Wilson", 4),
];

const doctorsArray: Doctor[] = [
  new Doctor("Dr. Emily", "Williams", 101, "Cardiologist"),
  new Doctor("Dr. John", "Brown", 102, "Pediatrician"),
  new Doctor("Dr. Sarah", "Lee", 103, "Dermatologist"),
  new Doctor("Dr. Michael", "Taylor", 104, "Orthopedic Surgeon"),
];

const appointmentsArray: Appointment[] = [
  new Appointment(patientsArray[0], doctorsArray[0], "2023-09-01", "10:00 AM"),
  new Appointment(patientsArray[1], doctorsArray[1], "2023-09-02", "3:30 PM"),
  new Appointment(patientsArray[2], doctorsArray[2], "2023-09-03", "11:30 AM"),
  new Appointment(patientsArray[3], doctorsArray[3], "2023-09-04", "2:00 PM"),
];

const hospital = new Hospital(
  "General Hospital",
  patientsArray,
  doctorsArray,
  appointmentsArray
);

const allAppointments = hospital.getAllAppointments();
// console.log(allAppointments);

const appointmentsByDoctorId = hospital.getAppointmentByDrID(102);
// console.log(appointmentsByDoctorId);

const appointmentsByPatientId = hospital.getAppointmentByPatientID(3);
// console.log(appointmentsByPatientId);

const appointmentsByDate = hospital.getAppointmentByDate("2023-09-02");
// console.log(appointmentsByDate);

const newPatient = new Patient("david", "king", 5);
hospital.addPatient(newPatient);
// console.log(hospital.patients);

const newDoc = new Doctor("larry", "john", 106, "heart");
hospital.addDoctor(newDoc);
// console.log(hospital.doctors);

const newAppointment = new Appointment(
  newPatient,
  newDoc,
  "2023-8-27",
  "03:40"
);
hospital.addAppointment(newAppointment);
console.log(hospital.appointments);
