export default interface ICreateAttendanceDTO {
  pacient_id: string;
  start_hour: Date;
  end_hour: Date;
  treatment: string;
}
