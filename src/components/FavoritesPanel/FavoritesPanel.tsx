import type { FavoritesPanelProps } from '../../types';
import CourseListView from '../CourseListView/CourseListView';
import Panel from '../Panel/Panel';

function FavoritesPanel({
  courses,
  ids,
  onToggle,
  onClear,
}: FavoritesPanelProps) {
  const favoriteCourses = courses.filter((course) => ids.includes(course.id));

  return (
    <Panel
      title="Избранные курсы"
      actions={<button onClick={onClear}>Очистить избранное</button>}
    >
      <CourseListView
        items={favoriteCourses}
        ids={ids}
        onSelect={onToggle}
        emptyText="Нет избранных курсов"
      />
    </Panel>
  );
}

export default FavoritesPanel;
