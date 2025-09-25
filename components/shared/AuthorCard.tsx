// components/shared/AuthorCard.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Author } from '@/content/authors';
import { Linkedin, Twitter, Github, Globe, ChevronDown, ChevronUp } from 'lucide-react';

interface AuthorCardProps {
  author: Author;
  showBio?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'vertical';
  showExpertise?: boolean;
  truncateBio?: boolean;
}

export const AuthorCard = ({
  author,
  showBio = false,
  size = 'md',
  layout = 'horizontal',
  showExpertise = false,
  truncateBio = false,
}: AuthorCardProps) => {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  const sizeClasses = {
    xs: {
      container: 'flex items-center gap-2',
      avatar: 'h-6 w-6 flex-shrink-0',
      name: 'text-xs font-medium leading-tight',
      role: 'text-xs text-slate-500 dark:text-slate-400 leading-tight',
      social: 'h-3 w-3',
      textContainer: 'min-w-0 flex-1',
      bio: 'text-xs',
      expertise: 'text-xs',
    },
    sm: {
      container: 'flex items-center gap-3',
      avatar: 'h-8 w-8 flex-shrink-0',
      name: 'text-sm font-medium leading-tight',
      role: 'text-xs text-slate-600 dark:text-slate-400 leading-tight',
      social: 'h-3 w-3',
      textContainer: 'min-w-0 flex-1',
      bio: 'text-sm',
      expertise: 'text-xs',
    },
    md: {
      container: 'flex flex-col items-center gap-4 text-center',
      avatar: 'h-12 w-12 flex-shrink-0 mx-auto',
      name: 'text-base font-medium',
      role: 'text-sm text-slate-600 dark:text-slate-400',
      social: 'h-4 w-4',
      textContainer: 'min-w-0 flex-1 space-y-2 text-center',
      bio: 'text-sm',
      expertise: 'text-xs',
    },
    lg: {
      container: 'flex flex-col items-center gap-4 text-center',
      avatar: 'h-16 w-16 flex-shrink-0 mx-auto',
      name: 'text-lg font-semibold',
      role: 'text-sm text-slate-600 dark:text-slate-400',
      social: 'h-4 w-4',
      textContainer: 'space-y-3 text-center',
      bio: 'text-sm',
      expertise: 'text-xs',
    },
    xl: {
      container: 'flex flex-col items-center gap-6 text-center',
      avatar: 'h-20 w-20 flex-shrink-0 mx-auto',
      name: 'text-xl font-bold',
      role: 'text-lg text-slate-600 dark:text-slate-400',
      social: 'h-5 w-5',
      textContainer: 'space-y-4 text-center',
      bio: 'text-base',
      expertise: 'text-sm',
    },
  };

  const classes = sizeClasses[size];
  const avatarSize =
    size === 'xl' ? 80 : size === 'lg' ? 64 : size === 'md' ? 48 : size === 'sm' ? 32 : 24;

  // Truncate bio to first sentence/line if truncateBio is true
  const getBioContent = () => {
    if (!author.bio) return '';

    if (truncateBio && !isBioExpanded) {
      // Get first line or first sentence (whichever is shorter)
      const firstLine = author.bio.split('\n')[0];
      const firstSentence = author.bio.split('.')[0] + '.';
      const truncated = firstLine.length < firstSentence.length ? firstLine : firstSentence;

      // Only truncate if the content is actually longer
      if (author.bio.length > truncated.length) {
        return truncated;
      }
    }

    return author.bio;
  };

  const shouldShowExpandButton =
    truncateBio &&
    author.bio &&
    author.bio.length > (author.bio.split('\n')[0].length || author.bio.split('.')[0].length + 1);

  return (
    <div className={`${classes.container} group transition-all duration-200`}>
      {/* Avatar - always at top */}
      <div className="relative">
        <Image
          src={author.avatar}
          alt={`${author.name} - ${author.role}`}
          width={avatarSize}
          height={avatarSize}
          className={`${classes.avatar} rounded-full object-cover ring-2 ring-transparent transition-all duration-200 group-hover:ring-slate-200 dark:group-hover:ring-slate-700`}
        />
        {(size === 'lg' || size === 'xl') && (
          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-background-main bg-green-500 dark:border-background-invert" />
        )}
      </div>

      <div className={classes.textContainer}>
        <div className="space-y-1">
          <h3
            className={`${classes.name} text-foreground-main transition-colors duration-200 group-hover:text-[#24BEE1] dark:text-foreground-invert`}
          >
            {author.name}
          </h3>
          <p className={`${classes.role}`}>{author.role}</p>
        </div>

        {showBio && author.bio && (
          <div className="mt-4">
            {getBioContent()
              .split('\n\n')
              .map((paragraph, index) => (
                <p
                  key={index}
                  className={`${classes.bio} leading-relaxed text-slate-700 dark:text-slate-300 ${index > 0 ? 'mt-3' : ''}`}
                >
                  {paragraph}
                </p>
              ))}

            {shouldShowExpandButton && (
              <button
                onClick={() => setIsBioExpanded(!isBioExpanded)}
                className="mx-auto mt-2 flex items-center gap-1 text-sm text-[#24BEE1] transition-colors hover:text-[#1DA1F2]"
              >
                {isBioExpanded ? (
                  <>
                    Show less <ChevronUp className="h-3 w-3" />
                  </>
                ) : (
                  <>
                    Show more <ChevronDown className="h-3 w-3" />
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Social Links */}
        {size !== 'xs' && size !== 'sm' && (
          <div className="mt-4 flex items-center justify-center gap-3">
            {author.social.linkedin && (
              <Link
                href={author.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-slate-500 transition-colors duration-200 hover:scale-110 hover:text-[#0077B5] dark:text-slate-400 dark:hover:text-[#0077B5]"
                aria-label={`${author.name} on LinkedIn`}
              >
                <Linkedin className={classes.social} />
              </Link>
            )}
            {author.social.twitter && (
              <Link
                href={author.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-slate-500 transition-colors duration-200 hover:scale-110 hover:text-[#1DA1F2] dark:text-slate-400 dark:hover:text-[#1DA1F2]"
                aria-label={`${author.name} on Twitter`}
              >
                <Twitter className={classes.social} />
              </Link>
            )}
            {author.social.github && (
              <Link
                href={author.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-slate-500 transition-colors duration-200 hover:scale-110 hover:text-foreground-main dark:text-slate-400 dark:hover:text-foreground-invert"
                aria-label={`${author.name} on GitHub`}
              >
                <Github className={classes.social} />
              </Link>
            )}
            {author.social.website && (
              <Link
                href={author.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="transform text-slate-500 transition-colors duration-200 hover:scale-110 hover:text-[#24BEE1] dark:text-slate-400 dark:hover:text-[#24BEE1]"
                aria-label={`${author.name}'s website`}
              >
                <Globe className={classes.social} />
              </Link>
            )}
          </div>
        )}

        {/* Expertise Tags */}
        {showExpertise && author.expertise.length > 0 && (size === 'lg' || size === 'xl') && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {author.expertise.slice(0, size === 'xl' ? 5 : 3).map((skill, index) => (
              <span
                key={index}
                className={`${classes.expertise} rounded-full border border-slate-200 bg-slate-100 px-2 py-1 text-slate-700 transition-colors duration-200 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700`}
              >
                {skill}
              </span>
            ))}
            {author.expertise.length > (size === 'xl' ? 5 : 3) && (
              <span className={`${classes.expertise} px-2 py-1 text-slate-500 dark:text-slate-500`}>
                +{author.expertise.length - (size === 'xl' ? 5 : 3)} more
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
