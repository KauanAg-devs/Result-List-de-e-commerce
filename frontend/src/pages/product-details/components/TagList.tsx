type Tag = { name: string };

type TagsListProps = {
  tags: Tag[];
};

export function TagsList({ tags }: TagsListProps): JSX.Element {
  return (
    <p>Tags: {tags.map((tag, index) => (
      <span key={index}>
        {tag.name}{index < tags.length - 1 ? ', ' : ''}
      </span>
    ))}</p>
  );
}
