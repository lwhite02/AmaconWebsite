export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
  hovered?: boolean; // Define the 'hovered' property here
  style?:string;
};
