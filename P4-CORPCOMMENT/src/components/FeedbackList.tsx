import { TriangleUpIcon } from "@radix-ui/react-icons"

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
        <li className="feedback">
            <button>
                <TriangleUpIcon/>
                <span>593</span>
            </button>
            <div>
                <p>B</p>
            </div>
            <div>
                <p>Bytegrad</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ducimus ab nihil harum veniam illo.</p>
            </div>
            <p>4d</p>
        </li>
    </ol>
  )
}