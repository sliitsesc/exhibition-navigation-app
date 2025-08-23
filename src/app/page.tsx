"use client";
import React from "react";
import { useRouter } from 'next/navigation'

export default function KnightRoBanner() {
  const router = useRouter()
  return (
    <div
      style={{
        backgroundImage: 'url("/images/banner-bg.jpg")',
        backgroundPosition: "center",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        position: "relative",
      }}>
      {/* Logo in top right corner */}
      <img
        src="/images/75logo.png" // Place your logo in public/images/logo.png
        alt="Logo"
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          width: 75,
          height: 75,
          objectFit: "contain",
          zIndex: 2,
        }}
      />
      {/* Knight Emblem Image */}
      <img
        src="/images/knight-emblem.svg" // Place your image in public/images/
        alt="Knight Emblem"
        style={{ width: 180, height: 200, marginBottom: 30 }}
      />

      {/* Title */}

      <h3 style={{ fontSize: 24, marginBottom: 16, textAlign: "center" }}>
        EXHIBITION
      </h3>
      {/* Subtitle */}
      <p
        style={{
          fontSize: 16,
          color: "#ccc",
          textAlign: "center",
          marginBottom: 32,
        }}>
        EXHIBITION NAVIGATION SUPPORT APPLICATION
      </p>

      {/* Buttons */}
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
  <button
      onClick={() => router.push('/ss')}
          style={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            fontSize: 22,
            padding: "20px 40px",
            border: "none",
            borderRadius: "999px",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}>
          SCAN QR CODE
        </button>
        <button
          onClick={() => router.push('/zones')}
          style={{
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            fontSize: 22,
            padding: "20px 40px",
            border: "none",
            borderRadius: "999px",
            textAlign: "center",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}>
          EXPLORE ZONES
        </button>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: "white",
  color: "#0a1a2f",
  border: "none",
  padding: "12px 20px",
  borderRadius: 8,
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
};
