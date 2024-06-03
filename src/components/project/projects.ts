import {
  AntDesignLogo,
  BootstrapLogo,
  ExpressJsLogo,
  GitHubActionLogo,
  GitLogo,
  HerokuLogo,
  JavascriptLogo,
  MongoDBLogo,
  MySQLLogo,
  NextJsLogo,
  ReactLogo,
  ReactRouterLogo,
  SpringBootLogo,
  SupabaseLogo,
  TypescriptLogo,
  VercelLogo,
  ViteLogo,
} from '../../assets/icons';
import type { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Recipedia',
    description: 'An online recipe book for food lovers',
    projectLink: 'https://github.com/Koscee/recipedia',
    imageUrl:
      'https://github.com/Koscee/recipedia/raw/main/docs/screenshots/recipedia-homepage.png',
    footerIcons: [
      { name: 'typescript', icon: TypescriptLogo },
      { name: 'react', icon: ReactLogo },
      { name: 'react-router', icon: ReactRouterLogo },
      { name: 'supabase', icon: SupabaseLogo },
      { name: 'vite', icon: ViteLogo },
      { name: 'git', icon: GitLogo },
      { name: 'github-action', icon: GitHubActionLogo },
    ],
  },
  {
    title: 'SmartRails',
    description: 'An online railway reservation management system',
    projectLink: 'https://github.com/Koscee/smartRails-web',
    imageUrl:
      'https://camo.githubusercontent.com/9ad86780e92e4c483ebc5d47f0fcc774554a551e4322b14f94d731ee5c3e1228/68747470733a2f2f7432343433343334382e702e636c69636b75702d6174746163686d656e74732e636f6d2f7432343433343334382f37323538623439322d613530652d343836652d616431342d3964353136646265623439302f696d6167652e706e673f766965773d6f70656e',
    footerIcons: [
      { name: 'javascript', icon: JavascriptLogo },
      { name: 'react', icon: ReactLogo },
      { name: 'nextjs', icon: NextJsLogo },
      { name: 'ant-design', icon: AntDesignLogo },
      { name: 'expressjs', icon: ExpressJsLogo },
      { name: 'mongodb', icon: MongoDBLogo },
      { name: 'git', icon: GitLogo },
      { name: 'vercel', icon: VercelLogo },
    ],
  },
  {
    title: 'PPM-Tool',
    description: 'A personal project tracking system',
    projectLink: 'https://github.com/Koscee/PPM-tool',
    imageUrl:
      'https://camo.githubusercontent.com/b8059206769748eab64df9442b18d8090a47c4e65fe99374dbbf0fda71f01e60/68747470733a2f2f7432343433343334382e702e636c69636b75702d6174746163686d656e74732e636f6d2f7432343433343334382f31386265343139342d306562652d346336612d626635342d6563323965613034306531382f696d6167652e706e673f766965773d6f70656e',
    footerIcons: [
      { name: 'react', icon: ReactLogo },
      { name: 'springboot', icon: SpringBootLogo },
      { name: 'bootstrap', icon: BootstrapLogo },
      { name: 'mysql', icon: MySQLLogo },
      { name: 'git', icon: GitLogo },
      { name: 'heroku', icon: HerokuLogo },
    ],
  },
];
