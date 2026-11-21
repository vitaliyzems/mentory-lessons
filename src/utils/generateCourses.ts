import type { ICourse } from '../types';
import courseDataJson from '../data/courses.json';

const courseData = courseDataJson as ICourse[];

export function generateCourses(): ICourse[] {
  return Array.from({ length: 2000 }, (_, index) => {
    const course = courseData[index % courseData.length];

    return {
      ...course,
      id: `${course.id}-${index}`,
    };
  });
}
