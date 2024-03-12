import Link from "next/link";

export default function SupportTeam() {
  return (
    <div className="text-gray-700">
      <p>
        <Link href="#" className="text-blue-500">
          Get in touch with our support team{" "}
        </Link>
        if you have any question or want to leave some feedback.
      </p>
      <p>We’ll be happy to hear from you.</p>
    </div>
  );
}
