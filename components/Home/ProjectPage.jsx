"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  ExternalLink,
  Github,
  MoreHorizontal,
  Star,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

import klc from "../../public/images/thumbnail/klc-akreditasi.jpg";
import dig from "../../public/images/thumbnail/dignition.jpg";
import estate from "../../public/images/thumbnail/estate.jpg";
import movie from "../../public/images/thumbnail/movie.jpg";
import perac from "../../public/images/thumbnail/perac.jpg";
import peluang from "../../public/images/thumbnail/peluang.jpg";
import food from "../../public/images/thumbnail/food.jpg";
import night from "../../public/images/thumbnail/night.jpg";
import shop from "../../public/images/thumbnail/shop.jpg";
import quiz from "../../public/images/thumbnail/quizify.png";
import wecare from "../../public/images/thumbnail/wecare.png";
import nirvana from "../../public/images/thumbnail/nirvana.png";
import umiba from "../../public/images/thumbnail/umiba.png";
import smasebelas from "../../public/images/thumbnail/smasebelas.png";
import skripsi from "../../public/images/thumbnail/skripsi.png";
import Link from "next/link";

const personalProjects = [
  {
    id: 1,
    name: "Smart Scheduling System with Genetic Algorithm and Simulated Annealing",
    description:
      "Made a Fullstack website for an automated scheduling system to automatically create a university schedule based on a lecturer’s preference",
    status: "completed",
    tech: ["React", "NextJS", "FastAPI", "TailwindCSS"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: skripsi,
    link: "https://github.com/Ader-EX/skripsi",
  },
  {
    id: 2,
    name: "Quizify Web App",
    description:
      "Made a Fullstack website for a Quiz App using localStorage, Context, and a fully functional authorization. This project used React, FastAPI, and TailwindCSS.",
    status: "completed",
    tech: ["React", "FastAPI", "TailwindCSS"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: quiz,

    link: "https://github.com/Ader-EX/DOT-frontend",
  },
  {
    id: 3,
    name: "Movie Light",
    description:
      "Made a Fullstack website that reads movie data and edit their metadatas like actors, studio, series, etc. This project used React, FastAPI, and TailwindCSS.",
    status: "completed",
    tech: ["React", "FastAPI", "TailwindCSS"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: night,

    link: "https://github.com/Ader-EX/FARM-Movie",
  },
  {
    id: 4,
    name: "Fullstack Shop Website",
    description:
      "Made a Fullstack website for a simple CRUD using EJS and Express.",
    status: "completed",
    tech: ["EJS", "Express"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: shop,

    link: "https://github.com/Ader-EX/shop-products",
  },
  {
    id: 5,
    name: "Estates Website",
    description:
      "Made a website for a real estate company. This project used NextJS, Typescript, KindeAuth, Supabase, and MongoDB.",
    status: "completed",
    tech: ["NextJS", "Typescript", "KindeAuth", "Supabase", "MongoDB"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: estate,

    link: "https://github.com/Ader-EX/Places-TS",
  },
  {
    id: 6,
    name: "React Native Food App",
    description:
      "Made a mobile app using React Native that shows a list of food and the details of the food.",
    status: "completed",
    tech: ["React Native"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: food,

    link: "https://github.com/Ader-EX/Foodie-RN",
  },
  {
    id: 7,
    name: "Movie App Using MovieDB",
    description:
      "A website that uses MovieDB's data to show a list of movies and the details using NextJS.",
    status: "completed",
    tech: ["NextJS"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: movie,

    link: "https://layarkaca31-fadhil-arief-finpro.vercel.app",
  },
  {
    id: 8,
    name: "Perac Coffee Mobile App",
    description: "A Java based mobile app for ordering coffee and drinks.",
    status: "completed",
    tech: ["Java"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: perac,

    link: "https://github.com/InMyDream21/Perac",
  },
  {
    id: 9,
    name: "We Care Booking App",
    description:
      "A PHP based app that allows users to book doctors with an admin dashboard.",
    status: "completed",
    tech: ["PHP"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: wecare,

    link: "https://github.com/SyuQyu/ProjectAkhirPemrogramanWeb",
  },
];
const workProjects = [
  {
    id: 1,
    name: "KLC - AKREDITASI",
    description:
      "Made a web that is used to assess the feasibility of financial training programs organized by the Indonesian Ministry of Finance. This project used NextJS, NextAuth, and TailwindCSS.",
    status: "completed",
    tech: ["NextJS", "NextAuth", "TailwindCSS"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: klc,

    link: "https://bppk.kemenkeu.go.id/akreditasi/",
  },
  {
    id: 2,
    name: "Peluang.co's Website",
    description:
      "Made a web for a franchise businesss e-commerce. This project used NextJS, Typescript, and Zod.",
    status: "completed",
    tech: ["NextJS", "Typescript", "Zod"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: peluang,

    link: "https://peluang.co",
  },
  {
    id: 3,
    name: "Dignition Learning Management System",
    description:
      "A website dedicated to UPN Veteran Jakarta's student club. Dignition is a Learning Management System with a goal to develop student skills.",
    status: "completed",
    tech: ["NextJS", "Typescript", "Zod", "TailwindCSS"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: dig,

    link: "https://dignition.androidupnvj.com",
  },
];
const otherProjects = [
  {
    id: 1,
    name: "Nirvana Niaga Company Profile Website",
    description: "Made a company profile website for a maritime company.",
    status: "completed",
    tech: ["ReactJS", "TailwindCSS", "Vercel"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: nirvana,

    link: "https://new-nirvana.vercel.app/",
  },
  {
    id: 2,
    name: "Universitas Mitra Bangsa Company Profile",
    description:
      "Made a web for a university. Also made a form that sends an email after submitting it ",
    status: "completed",
    tech: ["ReactJS", "TailwindCSS", "Vercel"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: umiba,
    link: "https://umiba.vercel.app",
  },
  {
    id: 3,
    name: "SMA 11 Bekasi Website",
    description: "A website dedicated for SMA 11 Bekasi and its information.",
    status: "completed",
    tech: ["ReactJS", "TailwindCSS", "Vercel"],
    lastUpdated: "2025-07-01",
    stars: 0,
    isPrivate: false,
    image: smasebelas,
    link: "https://sma-sebelas-bekasi.vercel.app/",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "completed":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "in-progress":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "planning":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    default:
      return "bg-gray-500/10 text-gray-400 border-gray-500/20";
  }
};

const ProjectCard = ({ project, type }) => {
  return (
    <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-200 group">
      <CardHeader className="pb-3">
        <Image
          src={project.image}
          alt=""
          className="rounded-xl mb-2"
          width={200}
          height={200}
        />
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-gray-100 group-hover:text-white transition-colors mb-2">
              {project.name}
            </CardTitle>
            <CardDescription className="text-gray-400 text-sm">
              {project.description}
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-2 text-gray-400 hover:text-black"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-gray-900 border-gray-800"
            >
              <DropdownMenuItem asChild>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-black"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-black"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Badge className={`w-fit text-xs ${getStatusColor(project.status)}`}>
          {project.status.replace("-", " ")}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1">
          {project.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs bg-gray-800 text-gray-300 hover:bg-gray-700"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{project.lastUpdated}</span>
          </div>
        </div>

        {type === "work" && project.deadline && (
          <div className="text-xs text-gray-500">
            Deadline: {project.deadline}
          </div>
        )}

        {type === "other" && project.downloads && (
          <div className="text-xs text-gray-500">
            Downloads: {project.downloads}/month
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#1d2949] p-6 mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl text-center uppercase font-bold text-white mb-2">
            Projects
          </h1>
        </div>

        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900 border-gray-800">
            <TabsTrigger
              value="personal"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-400"
            >
              Personal Projects
            </TabsTrigger>
            <TabsTrigger
              value="work"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-400"
            >
              Work Projects
            </TabsTrigger>
            <TabsTrigger
              value="other"
              className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-400"
            >
              Other Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {personalProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  type="personal"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="work" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {workProjects.map((project) => (
                <ProjectCard key={project.id} project={project} type="work" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} type="other" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
