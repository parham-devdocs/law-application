import { Tag, TagGroup } from 'rsuite';

type Color = 'red' | 'green' | 'blue' | 'orange' | 'cyan' | 'violet' | 'yellow';

type TagComponentProps = {
  list: string[];
  onCloseHandler: (value: string) => void; // Should receive the string value
  color?: Color;
};

const TagComponent = ({ list, onCloseHandler, color = 'green' }: TagComponentProps) => {
  return (
    <TagGroup>
      {list.map((item, index) => (
        <Tag
          key={index}
          color={color}
          closable
          onClose={() => {
            onCloseHandler(item); 
          }}
          
        >
          {item}
        </Tag>
      ))}
    </TagGroup>
  );
};

export default TagComponent;