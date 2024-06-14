"use client";

import { useTheme } from "next-themes";
import React from "react";
import GitHubCalendar, { ThemeInput } from "react-github-calendar";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
const minimalTheme: ThemeInput = {
  light: ["hsl(0, 0%, 92%)", "white"],
  dark: ["hsl(0, 0%, 92%)", "rebeccapurple"],
};

const selectLastHalfYear = (contributions: any) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 10;

  return contributions.filter((activity: any) => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

function GithubCalender() {
  const { theme, setTheme } = useTheme();
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <GitHubCalendar
        username="rishabhbizzle"
        // theme={{
        //     light: ['hsl(0, 0%, 92%)', 'firebrick'],
        //     dark: ['#333', 'rgb(214, 16, 174)'],
        //   }}
        year={new Date().getFullYear()}
        hideColorLegend
        labels={{
          totalCount: "{{count}} contributions this year",
        }}
        colorScheme={theme === "dark" ? "dark" : "light"}
      />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default GithubCalender;
