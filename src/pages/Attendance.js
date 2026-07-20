import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import QrScanner from "qr-scanner";
import Navbar from "../components/Navbar";
import { attendanceAPI } from "../services/attendanceAPI";
import { Link } from "react-router-dom";

const Attendance = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [attendanceMarked, setAttendanceMarked] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [webcamReady, setWebcamReady] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const webcamRef = useRef(null);
  const qrScannerRef = useRef(null);

  const startScanning = () => {
    setIsScanning(true);
    setAttendanceMarked(false);
    setScannedData(null);
    setWebcamReady(false);
  };

  const stopScanning = () => {
    if (qrScannerRef.current) {
      qrScannerRef.current.stop();
    }
    setIsScanning(false);
  };

  const onWebcamReady = () => {
    setWebcamReady(true);
    const video = webcamRef.current.video;

    qrScannerRef.current = new QrScanner(
      video,
      (result) => markAttendance(result.data),
      { highlightScanRegion: true, highlightCodeOutline: true }
    );

    qrScannerRef.current.start();
  };

  const markAttendance = async (qrData) => {
    if (isProcessing) return;

    setIsProcessing(true);

    const parts = qrData.split(":");
    if (parts[0] !== "ATTENDANCE") {
      alert("Invalid QR Code");
      stopScanning();
      setIsProcessing(false);
      return;
    }
    // eslint-disable-next-line no-unused-vars
    const [, studentName, studentId, qrTimestamp] = parts;

    try {
      const existing = await attendanceAPI.getAll();
      const alreadyMarked = existing.some(
        (a) => a.studentId === studentId && a.qrTimestamp === qrTimestamp
      );

      if (alreadyMarked) {
        alert("Attendance already marked!");
        stopScanning();
        setIsProcessing(false);
        return;
      }
    } catch (error) {
      alert("Error checking attendance: " + error.message);
      stopScanning();
      setIsProcessing(false);
      return;
    }

    try {
      await attendanceAPI.create({ studentName, studentId, qrTimestamp });

      setScannedData({
        name: studentName,
        id: studentId
      });

      setAttendanceMarked(true);
      stopScanning();
      setIsProcessing(false);
    } catch (error) {
      alert("Error marking attendance: " + error.message);
      stopScanning();
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    return () => qrScannerRef.current?.destroy();
  }, []);

  return (
    <>
      <Navbar />

      {/* Main Container */}
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-24">

        {/* Card */}
        <div className="site-card w-full max-w-md rounded-2xl p-8">

          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-slate-900">
            Student Attendance
          </h2>

          <p className="text-center text-slate-600 mt-2 mb-6">
            Scan the instructor’s QR code to mark your attendance
          </p>

          {/* Registration link */}
          <div className="text-center mb-6">
            <Link
              to="/registration"
              className="text-sm text-orange-500 hover:text-indigo-300 transition"
            >
              New student? Register here
            </Link>
          </div>

          {/* Start Scan Button */}
          {!isScanning && (
            <button
              onClick={startScanning}
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2 rounded-xl font-bold text-slate-900 shadow-xl "
            >
              📷 Start QR Scan
            </button>
          )}

          {/* Scanning Section */}
          {isScanning && (
            <div className="space-y-4">

              {!webcamReady && (
                <p className="text-center text-slate-600">
                  Initializing camera...
                </p>
              )}

              <div className="bg-slate-100 p-3 rounded-xl">
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  onUserMedia={onWebcamReady}
                  className={`rounded-lg ${webcamReady ? "" : "hidden"}`}
                  videoConstraints={{ facingMode: "environment" }}
                />
              </div>

              <button
                onClick={stopScanning}
                className="w-full py-3 rounded-xl bg-red-500 hover:bg-red-600 text-slate-900 font-semibold transition"
              >
                ❌ Stop Scanning
              </button>

            </div>
          )}

          {/* Success Message */}
          {attendanceMarked && scannedData && (
            <div className="mt-6 bg-green-900 border border-green-600 text-green-300 p-4 rounded-xl text-center">

              <p className="font-semibold">
                ✅ Attendance marked successfully!
              </p>

              <p className="mt-1">
                {scannedData.name} (ID: {scannedData.id})
              </p>

            </div>
          )}

        </div>

      </div>
    </>
  );
};

export default Attendance;