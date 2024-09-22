import { Editor } from "@/components/editor/Editor"
import Header from "@/components/Header"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"

const Document = () => {
  return (
    <div>
      <Header>
          <p>Hola mundo</p>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
      </Header>
      <Editor/>
    </div>
  )
}

export default Document