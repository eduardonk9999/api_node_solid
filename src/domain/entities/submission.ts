import { Entity } from "../../core/domain/Entity";

type SubmissionProps = {
  challangeId: string;
  studentId: string;
  createdAt: Date;
}

export class Submission extends Entity<SubmissionProps>{
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id)
  }

  static create(props: SubmissionProps, id?: string) {
    const submission = new Submission(props);

    return submission;
  }
}