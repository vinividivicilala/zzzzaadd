"use client";

import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Instagram,
  Facebook,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SkanderImg from "@/app/data/images/ghana_fun_photo.jpg";

const LeetCodeStats = () => {
  const [solvedCount, setSolvedCount] = useState("around 150");

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch(
          "https://leetcodeapi-v1.vercel.app/fardardnsyh"
        );
        const data = await response.json();

        // Define the type for the response data
        type SubmissionStats = {
          difficulty: string;
          count: number;
        };

        type LeetCodeData = {
          fardardnsyh: {
            submitStatsGlobal: {
              acSubmissionNum: SubmissionStats[];
            };
          };
        };

        const totalSolved =
          (
            data as LeetCodeData
          ).fardardnsyh.submitStatsGlobal.acSubmissionNum.find(
            (item: SubmissionStats) => item.difficulty === "All"
          )?.count || 0; // Use optional chaining and default to 0 if not found
        setSolvedCount(totalSolved.toString()); // Convert number to string
      } catch (error) {
        console.error("Failed to fetch LeetCode stats:", error);
      }
    };

    fetchLeetCodeStats();
  }, []);

  return <span>{solvedCount}</span>;
};

export function PortfolioComponent() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Set the default theme to 'dark'
    if (theme === "system") {
      setTheme("dark");
    }
  }, [theme, setTheme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 my-4">
        <header className="mb-16 text-center relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Image
            src={SkanderImg}
            alt={"Skander's Image"}
            width={400}
            height={300}
            style={{
              objectFit: "cover",
              marginTop: "100px",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "30px",
            }}
            className="rounded-md mt-24 mb-8 mx-auto"
          />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Farid Ardiansyah
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Lulusan Mahasiswa
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            tertarik tentang <span className="font-bold text-primary">Arduino</span>{" "}
            &{" "}
            <span className="font-bold text-primary">Hobi Teknologi</span>
          </p>
          <nav className="flex flex-wrap justify-center space-x-4 mb-4">
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="/timeline" className="hover:underline">
              Timeline
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </nav>
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:faridardiansyah061@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
          </div>
        </header>

        <main className="space-y-16">
          <section id="about">
            <div className="text-center">
              <p className="text-primary">
                Saya bukan seorang ahli teknologi. Saya memandang teknologi dengan mata hobi saya, mata orang normal Saat ini saya sedang berusaha melatih keterampilan mandiri dan mempelajari hal-hal yang saya miliki perlu belajar, saya sangat termotivasi untuk terus maju, sejak itu tidak ada batasan dalam pemrograman,skill apapun.
              </p>
            </div>
          </section>

          <section id="projects">
            <h2 className="text-2xl font-semibold mb-6">
             proses hidup saya belajar didunia.
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Belajar design sketsa illustrator character menggunakan figma/powerpoint.
              </li>
			  <li>
                Belajar ngoding pemrograman dari para orang - orang yg berpengalaman dan ahli.
              </li>
			  <li>
                Belajar fotografi dari dasar - dasarnya.
              </li>
              <li>
                Memperlajari ilmu-ilmu yang saya belum pahami, yang lagi berkembang pesat didunia teknologi saat ini{" "}
                <a href="https://leetcode.com/fardardnsyh" className="link-blue">
                  <LeetCodeStats /> mengetahui hal
                </a>.
              </li>
            </ul>
          </section>

          <section id="past-work">
            <h2 className="text-2xl font-semibold mb-6">
            proses hidup saya belajar didunia yang sudah selesai.
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Menyelesaikan proyek sistem komputer membuat alat dan lain-lain{" "}
                <a
                  className="link"
                  href=""
                >
                 untuk mendapatkan nilai A
                </a>{" "}
                dan belajar untuk mempersiapkan penelitian ilmiah di universitas gunadarma.
              </li>
              <li>
                Menyelesaikan proyek penelitian ilmiah membuat alat dan lain-lain{" "}
                <a href="" className="link-blue">
                  untuk mendapatkan nilai A
                </a>{" "}
                 dan belajar untuk mempersiapkan Skripsi di universitas gunadarma.
              </li>
              <li>
               Menyelesaikan kursus-kursus semester 1 sampai 8 untuk bisa sidang sarjana{" "}
                <a
                  href="/timeline"
                  className="text-blue-500 transition-colors duration-400 ease-in-out hover:text-yellow-500 hover:underline"
                >
                  (more here)
                </a>.
				 <a
                  href="https://e-sert.gunadarma.ac.id/detail/22119274"
                  className="text-blue-500 transition-colors duration-400 ease-in-out hover:text-yellow-500 hover:underline"
                >
                  (more here)
                </a>.
              </li>
              <li>
                 Menyelesaikan proyek skripsi membuat alat dan lain-lain.
              </li>
              <li>
                usaha{" "}
                <a href="" className="link-blue">
                  untuk mendapatkan nilai A
                </a>{" "}
               dan belajar untuk mempersiapkan ilmu-ilmu di luar universitas gunadarma{" "}
                <a
                  href="/timeline"
                  className="text-grey-500 italic hover:underline"
                >
                  .
                </a>
               belajar untuk mengerjakan kursus-kursus, design, fotografi, sketsa character illustrator
              </li>
            </ul>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold mb-4">Silahkan</h2>
            <p className="text-primaryforeground mb-4">
              Saya selalu terbuka terhadap peluang dan kolaborasi baru, jadi jangan ragu untuk menghubungi saya.
            </p>
            <div className="flex justify-center space-x-4 px-4 my-4 mb-6">
              <Button asChild>
                <Link href="mailto:faridardiansyah061@gmail.com">
                  Contact me <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-primaryforeground mb-4">
              Jika Anda tertarik untuk melihat media sosial saya yang lain, Anda bisa
              temukan di sini:
            </p>
            <div className="flex justify-center space-x-4 px-4 my-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/fardardinsyh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/fardardinsyh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <footer className="mt-16 text-center text-muted-foreground">
          <p> Farid Ardiansyah. Semangat 😝.</p>
        </footer>
      </div>
    </div>
  );
}
