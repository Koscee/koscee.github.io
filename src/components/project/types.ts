export type Project = {
  title: string;
  description?: string;
  imageUrl: string;
  footerIcons: Array<{
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  }>;
  projectLink: string;
};
