export type Events = {
  eventId: number;
  eventsTitle: string;
  eventDate: string | Date;
  startTime: string;
  endTime: string;
  duration: number;
  color: string;
};
export type EventWithStyles = Events & {
  top: number;
  left: number;
  order: number;
};

export type DayProps = {
  selectedDate: string | Date;
  events: Events[];
};
export type RDCProps = {
  selectedDate: string | Date;
  events: Events[];
  isLoading: boolean;
};

export type RDCRootProps = {
  selectedDate: string | Date;
  events: Events[];
  isLoading: boolean;
  systemDate: string | Date;
};
