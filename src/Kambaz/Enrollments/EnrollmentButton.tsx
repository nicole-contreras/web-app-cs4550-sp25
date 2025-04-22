import { useState } from "react";

export default function EnrollmentButton({
    isEnrolled,
    courseId,
    userId,
    onEnroll,
    onUnenroll,
  }: {
    isEnrolled: boolean;
    courseId: string;
    userId: string;
    onEnroll: () => Promise<void>;
    onUnenroll: () => Promise<void>;
  }) {
    const [loading, setLoading] = useState(false);
  
    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
        isEnrolled ? await onUnenroll() : await onEnroll();
      } catch (error) {
        console.error("Enrollment action failed", error);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <button
        onClick={handleClick}
        className={`btn ${isEnrolled ? "btn-danger" : "btn-success"}`}
        disabled={loading}
        id={
          isEnrolled ? "wd-unenroll-course-click" : "wd-enroll-course-click"
        }
      >
        {loading
          ? isEnrolled
            ? "Unenrolling..."
            : "Enrolling..."
          : isEnrolled
          ? "Unenroll"
          : "Enroll"}
      </button>
    );
  }
  