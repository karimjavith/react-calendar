export type Events = {
  calendarId: number;
  eventsTitle: string;
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
  selectedDate: string;
  events: Events[];
  isLoading: boolean;
};
