import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CollegeDocument } from 'src/models/college.model';
import { Model } from 'mongoose';

@Injectable()
export class CollegeService {
  constructor(
    @InjectModel('College') private collegeModel: Model<CollegeDocument>,
  ) {}

  async getByName(title: string): Promise<CollegeDocument[]> {
    return this.collegeModel.find({
      title: { $regex: '.*' + title + '.*', $options: 'i' },
    });
  }

  async getClgById(id: string): Promise<CollegeDocument> {
    return this.collegeModel.findById({ _id: id });
  }
}
