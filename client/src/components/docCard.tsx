import { FaCheckCircle, FaRegClock, FaTimesCircle } from 'react-icons/fa';
import { MdDocumentScanner } from 'react-icons/md';
import { Card, Text, Avatar, HStack, VStack, Badge, Button } from 'rsuite';

type CardProps = {
  clientFullName: string;
  docId: number;
  picture?: string;
  description: string;
  numberOfPapers: number;
  issueDate: string;
  endDate?: string;
  status: 'در حال انجام' | 'از دست رفته' | 'موفقیت آمیز';
  type: 'کیفری' | 'حقوقی';
};

const CardComponent = ({
  clientFullName,
  type,
  docId,
  picture,
  numberOfPapers,
  description,
  issueDate,
  endDate,
  status,
}: CardProps) => {
  const getStatusColor = (status: CardProps['status']) => {
    switch (status) {
      case 'از دست رفته':
        return 'text-red-500';
      case 'در حال انجام':
        return 'text-blue-500';
      case 'موفقیت آمیز':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: CardProps['status']) => {
    switch (status) {
      case 'در حال انجام':
        return <FaRegClock className="text-blue-500" />;
      case 'موفقیت آمیز':
        return <FaCheckCircle className="text-green-500" />;
      case 'از دست رفته':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <Card style={{ width: 320,maxHeight:250 }} shaded >
      <Card.Header>
        <HStack alignItems="center" spacing={10}>
          {/* Avatar with Badge on top-right */}
          <div className="relative">
            <Avatar
              circle
              size="sm"
              src={picture || `https://i.pravatar.cc/150?u=${docId}`}
              alt={clientFullName}
            />
            <Badge
              content={docId}
              className="absolute -top-1 -right-3  text-white text-xs "
              color="cyan"
              
            />
          </div>

          <VStack spacing={4}>
            <Text className="font-semibold text-gray-800">{clientFullName}</Text>
            <Text size="sm" muted>
              {type}
            </Text>
          </VStack>
          <div className=' flex flex-1 justify-end'>
          <div className="flex items-center justify-center px-2 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium gap-1">
  <MdDocumentScanner className="text-blue-500" />
  <span>{numberOfPapers}</span>
</div>  
          </div>
      </HStack>
      </Card.Header>

      <Card.Body>
      <Text
  as="p"
  className="text-sm text-gray-700 "
  style={{
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,     // ✅ Correct way to clamp to 2 lines
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',   // OK because -webkit-line-clamp overrides wrapping
    wordWrap: 'break-word', // Ensures long words break
    maxHeight: '3.6em',     // ~2 lines (1.8em × 2)
    lineHeight: '1.8em',
  }}
>
  {description}
</Text>
      </Card.Body>

      <Card.Footer className="flex items-center justify-between pt-2 mt-2 border-t border-gray-100">
        <Text
          className={`flex items-center gap-1 text-xs font-medium ${getStatusColor(status)}`}
        >
          {status} {getStatusIcon(status)}
        </Text>
        <HStack spacing={8} className="text-xs text-gray-500">
          <span>صدور: {issueDate}</span>
          {endDate && <span>پایان: {endDate}</span>}
        </HStack>
      </Card.Footer>
      <Button appearance="primary" style={{margin:5}}>جزییات</Button>

    </Card>
  );
};

export default CardComponent;