import styles from './Carousel.module.css';
import { technologies } from './technologies';

type CarouselItem = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function Carousel() {
  const items: CarouselItem[] = technologies;

  const renderItems = () => {
    return items.map(({ name, icon }) => {
      const Icon = icon;
      return (
        <span
          key={name}
          className={styles.carousel_item}
          title={name}
          aria-label="item-logo"
        >
          <Icon />
        </span>
      );
    });
  };

  const renderSlider = (times: number = 2) => {
    return Array.from({ length: times }).map((_, index) => {
      return (
        <div key={index} className={styles.carousel_slider}>
          {renderItems()}
        </div>
      );
    });
  };

  return <div className={styles.carousel}>{renderSlider()}</div>;
}
