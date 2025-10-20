import React, { useState } from 'react';

const patients = [
  {
    id: '1',
    name: 'John Oliver',
    dob: '1990-01-01',
    height: '180 cm',
    records: [
      { date: '2023-05-01', diagnosis: 'Fever', weight: '72 kg', doctor: 'Dr. Smith' },
      { date: '2023-06-15', diagnosis: 'Cough', weight: '71 kg', doctor: 'Dr. Adams' },
    ],
  },
  {
    id: '2',
    name: 'Emily Watson',
    dob: '1985-07-12',
    height: '165 cm',
    records: [
      { date: '2023-04-10', diagnosis: 'Diabetes', weight: '65 kg', doctor: 'Dr. Grey' },
    ],
  },
  {
    id: '3',
    name: 'Michael Scott',
    dob: '1975-03-15',
    height: '178 cm',
    records: [
      { date: '2023-02-20', diagnosis: 'Migraine', weight: '76 kg', doctor: 'Dr. Meredith' },
    ],
  },
  {
    id: '4',
    name: 'Angela Martin',
    dob: '1980-11-02',
    height: '155 cm',
    records: [
      { date: '2023-01-25', diagnosis: 'Flu', weight: '50 kg', doctor: 'Dr. Dwight' },
    ],
  },
  {
    id: '5',
    name: 'Jim Halpert',
    dob: '1988-09-30',
    height: '183 cm',
    records: [
      { date: '2023-03-18', diagnosis: 'Sprain', weight: '79 kg', doctor: 'Dr. Pam' },
    ],
  },
];

const Hospital = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState('');
  const [selectedPatientIndex, setSelectedPatientIndex] = useState(null);

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectChange = (e) => {
    setSelectedId(e.target.value);
  };

  const handleShow = () => {
    const index = filteredPatients.findIndex((p) => p.id === selectedId);
    if (index !== -1) {
      setSelectedPatientIndex(index);
    }
  };

  const handleNext = () => {
    if (selectedPatientIndex !== null && selectedPatientIndex < filteredPatients.length - 1) {
      setSelectedPatientIndex(selectedPatientIndex + 1);
      setSelectedId(filteredPatients[selectedPatientIndex + 1].id);
    }
  };

  const selectedPatient =
    selectedPatientIndex !== null ? filteredPatients[selectedPatientIndex] : null;

  return (
    <div style={styles.container}>
      <div style={styles.formRow}>
        <input
          type="text"
          placeholder="Search Patient..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.input}
        />

        <select
          value={selectedId}
          onChange={handleSelectChange}
          style={styles.select}
          data-testid="patient-name"
        >
          <option value="" disabled>
            Select Patient
          </option>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))
          ) : (
            <option value="" disabled>
              No match found
            </option>
          )}
        </select>

        <button onClick={handleShow} data-testid="show" style={styles.button}>
          Show
        </button>
      </div>

      {selectedPatient && (
        <Report patient={selectedPatient} onNext={handleNext} hasNext={selectedPatientIndex < filteredPatients.length - 1} />
      )}
    </div>
  );
};

const Report = ({ patient, onNext, hasNext }) => {
  return (
    <div style={styles.reportContainer}>
      <div style={styles.profileBox}>
        <h3 style={styles.name}>{patient.name}</h3>
        <p style={styles.detail}>DOB: {patient.dob}</p>
        <p style={styles.detail}>Height: {patient.height}</p>
        {hasNext && (
          <button style={styles.nextButton} onClick={onNext} data-testid="next-btn">
            Next
          </button>
        )}
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>SL</th>
            <th>Date</th>
            <th>Diagnosis</th>
            <th>Weight</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody data-testid="patient-table">
          {patient.records.map((rec, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{rec.date}</td>
              <td>{rec.diagnosis}</td>
              <td>{rec.weight}</td>
              <td>{rec.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  formRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    width: '200px',
  },
  select: {
    padding: '8px',
    minWidth: '180px',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#3f51b5',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  reportContainer: {
    marginTop: '20px',
  },
  profileBox: {
    border: '1px solid #ddd',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    position: 'relative',
  },
  name: {
    margin: '0 0 10px',
  },
  detail: {
    margin: '5px 0',
  },
  nextButton: {
    position: 'absolute',
    right: '20px',
    top: '20px',
    backgroundColor: '#ff9800',
    color: 'white',
    padding: '6px 12px',
    border: 'none',
    cursor: 'pointer',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#f1f1f1',
    padding: '10px',
  },
  td: {
    borderBottom: '1px solid #ccc',
    padding: '8px',
  },
};

export default Hospital;
