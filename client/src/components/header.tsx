import { Button } from 'rsuite';

interface HeaderProps {
  title: string;
  buttonLink?: string;
  buttonTitle?: string;
}

const Header = ({ title, buttonLink = '#', buttonTitle = 'اقدام' }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white border-b border-gray-200 shadow-sm rounded-t-lg">
      <Button
        href={buttonLink}
        appearance="primary"
        color="blue"
        className="px-4 py-2 text-sm font-medium"
      >
        {buttonTitle}
      </Button>
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

    </header>
  );
};

export default Header;