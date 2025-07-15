export default function CommentForm() {
  return (
    <form action="#" className="w-full bg-base-200 p-6 rounded-xl overflow-hidden">
      <fieldset className="fieldset w-full">
        <legend className="fieldset-legend">Your Comment:</legend>
        <textarea className="textarea h-24 w-full mb-2.5" placeholder="Write something nice!"></textarea>
      </fieldset>
      <button className="btn btn-primary float-right">Post</button>
    </form>
  )
}
