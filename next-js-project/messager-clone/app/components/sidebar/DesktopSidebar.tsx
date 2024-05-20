"use client";

import { User } from "@prisma/client";
import { DesktopSidebar } from "./DesktopSidebar.1";

export interface DesktopSidebarProps {
  currentUser: User;
}

export default DesktopSidebar;
