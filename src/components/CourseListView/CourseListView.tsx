import type { CourseListViewProps } from '../../types';
import CourseCard from '../CourseCard/CourseCard';

function CourseListView({
  items,
  ids,
  emptyText,
  onSelect,
  onToggle,
}: CourseListViewProps) {
  return items.length === 0 ? (
    <div>{emptyText}</div>
  ) : (
    <div className="courses">
      {items.map((course) => (
        <CourseCard
          ids={ids}
          course={course}
          key={course.id}
          onSelect={onSelect}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default CourseListView;
