import MarkdownRender from './MarkdownRender';

export default function PostDetail({ postDetail }) {
  const { _id, writer, title, description, category, content, likes } =
    postDetail;
  return (
    <>
      <div>
        <div>{_id}</div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <MarkdownRender markdown={content} />
    </>
  );
}
