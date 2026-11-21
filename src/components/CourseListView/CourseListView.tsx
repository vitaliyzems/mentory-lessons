import type { CourseListViewProps } from '../../types';
import CourseCard from '../CourseCard/CourseCard';

function CourseListView({
  items,
  emptyText,
  onSelect,
  options,
}: CourseListViewProps) {
  return items.length === 0 ? (
    <div>{emptyText}</div>
  ) : (
    <div className="courses">
      {items.map((course) => (
        <CourseCard
          course={course}
          key={course.id}
          onSelect={onSelect}
          options={options}
        />
      ))}
    </div>
  );
}

export default CourseListView;
