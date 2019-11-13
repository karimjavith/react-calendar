export type TEvent = {
  eventId: number;
  eventsTitle: string;
  eventDate: string | Date;
  startTime: string;
  endTime: string;
  duration: number;
  color: string;
};
export type EventWithStyles = TEvent & {
  top: number;
  left: number;
  order: number;
};

export type DayProps = {
  selectedDate: string | Date;
  events: TEvent[];
};

export type THeader = {
  selectedDate: string | Date;
  changeDate: (by: number) => void;
};
export type RDCProps = {
  selectedDate: string | Date;
  events: TEvent[];
  isLoading: boolean;
};

export type RDCContextType = {
  systemDate: string | Date;
  onEventClickCb?: (event: TEvent) => any;
};

export type RDCRootProps = {
  selectedDate: string | Date;
  events: TEvent[];
  isLoading: boolean;
  systemDate: string | Date;
  onEventClickCb: (event: TEvent) => any;
};
