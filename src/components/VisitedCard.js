import React from "react";

function VisitingCard() {
  return (
    <div
      style={{
        background: "#f4f7fc",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "600px",
          background: "#fff",
          borderRadius: "20px",
          display: "flex",
          padding: "30px",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
        }}
      >
        {/* Left Section */}
        <div
          style={{
            width: "40%",
            textAlign: "center",
            borderRight: "2px solid #e5e5e5",
            paddingRight: "25px",
          }}
        >
          <img
            src="/Bhawna.jpeg"
            alt="Profile"
            style={{
              width: "220px",
              height: "300px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "5px solid #2563eb",
            }}
          />

          <h1
            style={{
              color: "#0f172a",
              marginTop: "20px",
              marginBottom: "5px",
            }}
          > 
            Bhawna Jindal 
          </h1>

          <h3
            style={{
              color: "#2563eb",
              fontWeight: "500",
            }}
          >
            Computer Science Student
          </h3>
          <hr/>
          <p
            style={{
              color: "#555",
              lineHeight: "28px",
              marginTop: "20px",
            }}
          >
            Passionate about Web Development and building modern React
            applications.
          </p>

          <div
            style={{
              marginTop: "40px",
              background: "#2563eb",
              color: "white",
              padding: "15px",
              borderRadius: "12px",
            }}
          >
              🎓 B.Tech CSE (2024-28)<br />
                 Geeta University
          </div>
        </div>

        {/* Right Section */}
        <div
          style={{
            width: "60%",
            paddingLeft: "35px",
          }}
        >
          <h2
            style={{
              color: "#2563eb",
              marginBottom: "25px",
            }}
          >
            Let's Connect
          </h2>

          <p style={{ fontSize: "18px" }}>
            📧 jindalbhawna861@gmail.com
          </p>

          <hr />

          <p style={{ fontSize: "18px" }}>
            📞 +91 9992033155
          </p>

          <hr />

          <p style={{ fontSize: "18px" }}>
            💻 github.com/Bhawna3010
          </p>

          <hr />

          <p style={{ fontSize: "18px" }}>
            💼 linkedin.com/in/bhawna-jindal
          </p>

          <hr />

          <h2
            style={{
              color: "#2563eb",
              marginTop: "30px",
            }}
          >
            Skills
          </h2>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Bootstrap",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                style={{
                  background: "#e0ebff",
                  color: "#2563eb",
                  padding: "10px 18px",
                  borderRadius: "25px",
                  fontWeight: "bold",
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitingCard;