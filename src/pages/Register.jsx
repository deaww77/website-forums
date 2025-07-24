function Register() {
  return (
    <main style={styles.container}>
      <h1 style={styles.title}>สมัครสมาชิก</h1>
      <p>กรุณากรอกข้อมูลเพื่อสร้างบัญชีใหม่</p>
      {/* คุณสามารถใส่แบบฟอร์มสมัครสมาชิกต่อได้ที่นี่ */}
    </main>
  );
}

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fffbe6",
    minHeight: "100vh",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
  },
};

export default Register;
