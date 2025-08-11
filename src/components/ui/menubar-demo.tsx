/**
 * Menubar demo component showcasing Global Technocrats navigation
 * Created: 2025-07-11
 */

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Projects</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>All Projects</MenubarItem>
          <MenubarItem>New Project</MenubarItem>
          <MenubarItem>Archived Projects</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Tasks</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>My Tasks</MenubarItem>
          <MenubarItem>Assigned Tasks</MenubarItem>
          <MenubarItem>Completed Tasks</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Calendar</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>View Calendar</MenubarItem>
          <MenubarItem>Schedule Task</MenubarItem>
          <MenubarItem>Events</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Teams</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>All Teams</MenubarItem>
          <MenubarItem>Create Team</MenubarItem>
          <MenubarItem>Manage Teams</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Messages</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Inbox</MenubarItem>
          <MenubarItem>Sent</MenubarItem>
          <MenubarItem>Drafts</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Files</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Upload File</MenubarItem>
          <MenubarItem>My Files</MenubarItem>
          <MenubarItem>Shared Files</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Reports</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Project Reports</MenubarItem>
          <MenubarItem>Task Reports</MenubarItem>
          <MenubarItem>Time Reports</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Notifications</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>All Notifications</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Settings</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>History</MenubarItem>
          <MenubarItem>Time Tracking</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Start Timer</MenubarItem>
          <MenubarItem>Time Logs</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}