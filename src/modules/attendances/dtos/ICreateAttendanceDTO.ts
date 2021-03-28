export default interface ICreateAttendanceDTO {
  pacient_id: string;
  attendance_date: Date;
  start_hour: Date;
  end_hour: Date;
  treatment: string;
}
