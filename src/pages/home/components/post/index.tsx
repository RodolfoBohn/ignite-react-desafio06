import Image from "next/image"
import { RatingProps } from "../../index.page"
import { PostBodyContent, PostBodyWrapper, PostHeader, PostHeaderContent, PostHeaderTitle, PostWrapper, UserImage } from "./styles"
import { Star } from "phosphor-react"

interface PostProps {
  rating: RatingProps
}
export const Post = ({rating}: PostProps) => {
  return (
    <PostWrapper>
      <PostHeader>
        <PostHeaderContent>
          <UserImage src={rating.user.avatar_url} alt={rating.user.name} width={40} height={40} />
          <PostHeaderTitle>
            <p>{rating.user.name}</p>
            <span>{rating.user.created_at.toString()}</span>
          </PostHeaderTitle>
        </PostHeaderContent>
        <Star />
      </PostHeader>
      <PostBodyWrapper>
        <Image src={rating.book.cover_url} alt={rating.book.name} width={108} height={152} />
        <PostBodyContent>
          <h2>{rating.book.name}</h2>
          <span>{rating.book.author}</span>
          <p>{rating.description}</p>
        </PostBodyContent>
      </PostBodyWrapper>
    </PostWrapper>
  )
}
