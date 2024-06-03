import { Button } from './button';
import { Profile } from './profile';
import { FileArrowDown } from '../assets/icons';

export default function HeroSection() {
  return (
    <section>
      <Profile
        name="Koscee"
        imageUrl="https://avatars.githubusercontent.com/u/52253099?v=4"
        jobTitle="Full-Stack Developer | React Developer | Data Analyst"
        actionEl={
          <>
            <a
              href="/documents/Kosolochi_Umeokoli-CV-chinese-version.pdf"
              download="Kosolochi_Umeokoli-CV-中文版"
              target="_blank"
            >
              <Button
                text="中文简历"
                variant="outline"
                icon={<FileArrowDown />}
              />
            </a>
            <a
              href="/documents/Kosolochi_Umeokoli-CV-english-version.pdf"
              download="Kosolochi_Umeokoli-CV-en"
              target="_blank"
            >
              <Button text="English CV" icon={<FileArrowDown />} />
            </a>
          </>
        }
      />
    </section>
  );
}
