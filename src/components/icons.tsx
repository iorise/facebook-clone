import {
  Loader2,
  EyeOff,
  Eye,
  type LucideProps,
  MessageCircle,
  Plus,
  CheckCheck,
  ChevronDown,
  Globe2,
  Smile,
  UserSquare2,
  FileImage,
  SmilePlus,
  Pencil,
  ThumbsUp,
  Forward,
  SendHorizonal,
} from "lucide-react";

import {
  AiFillHome,
  AiFillQuestionCircle,
  AiFillSetting,
  AiFillShop,
  AiOutlineHome,
  AiOutlineShop,
} from "react-icons/ai";
import {
  PiMoonFill,
  PiNewspaperClippingFill,
  PiVideo,
  PiVideoFill,
} from "react-icons/pi";
import {
  HiOutlineUserGroup,
  HiSpeakerphone,
  HiUserGroup,
} from "react-icons/hi";
import {
  RiGamepadLine,
  RiGamepadFill,
  RiMessengerFill,
  RiLogoutBoxRFill,
} from "react-icons/ri";
import {
  BiSolidBell,
  BiSolidCalendarStar,
  BiSolidMessageError,
} from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  BsBookmarkFill,
  BsFillClockFill,
  BsFillGrid3X3GapFill,
  BsFlagFill,
  BsImageFill,
  BsPeopleFill,
} from "react-icons/bs";

export const Icons = {
  spinner: Loader2,
  view: Eye,
  hide: EyeOff,
  home: AiOutlineHome,
  homeFill: AiFillHome,
  video: PiVideo,
  videoFill: PiVideoFill,
  marketplace: AiOutlineShop,
  marketplaceFill: AiFillShop,
  group: HiOutlineUserGroup,
  groupFill: HiUserGroup,
  game: RiGamepadLine,
  gameFill: RiGamepadFill,
  setting: AiFillSetting,
  help: AiFillQuestionCircle,
  moon: PiMoonFill,
  feedback: BiSolidMessageError,
  logout: RiLogoutBoxRFill,
  notification: BiSolidBell,
  message: RiMessengerFill,
  menu: BsFillGrid3X3GapFill,
  hamburger: GiHamburgerMenu,
  plus: Plus,
  people: BsPeopleFill,
  news: PiNewspaperClippingFill,
  clock: BsFillClockFill,
  event: BiSolidCalendarStar,
  ads: BsImageFill,
  flag: BsFlagFill,
  speaker: HiSpeakerphone,
  bookmark: BsBookmarkFill,
  check: CheckCheck,
  arrowDown: ChevronDown,
  world: Globe2,
  emoji: Smile,
  user: UserSquare2,
  fileImage: FileImage,
  avatar: SmilePlus,
  pencil: Pencil,
  thumb: ThumbsUp,
  comment: MessageCircle,
  share: Forward,
  send: SendHorizonal,
  thumbFill: ({ ...props }: LucideProps) => (
    <svg viewBox="-6.24 -6.24 36.48 36.48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.384" {...props}><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-6.24" y="-6.24" width="36.48" height="36.48" rx="18.24" fill="#2b8dfc" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.72"></g><g id="SVGRepo_iconCarrier"> <path d="M20.2699 16.265L20.9754 12.1852C21.1516 11.1662 20.368 10.2342 19.335 10.2342H14.1539C13.6404 10.2342 13.2494 9.77328 13.3325 9.26598L13.9952 5.22142C14.1028 4.56435 14.0721 3.892 13.9049 3.24752C13.7664 2.71364 13.3545 2.28495 12.8128 2.11093L12.6678 2.06435C12.3404 1.95918 11.9831 1.98365 11.6744 2.13239C11.3347 2.29611 11.0861 2.59473 10.994 2.94989L10.5183 4.78374C10.3669 5.36723 10.1465 5.93045 9.86218 6.46262C9.44683 7.24017 8.80465 7.86246 8.13711 8.43769L6.69838 9.67749C6.29272 10.0271 6.07968 10.5506 6.12584 11.0844L6.93801 20.4771C7.0125 21.3386 7.7328 22 8.59658 22H13.2452C16.7265 22 19.6975 19.5744 20.2699 16.265Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z" fill="#ffffff"></path> </g></svg>
  ),
  verified: ({ ...props }: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M11.5283 1.5999C11.7686 1.29437 12.2314 1.29437 12.4717 1.5999L14.2805 3.90051C14.4309 4.09173 14.6818 4.17325 14.9158 4.10693L17.7314 3.3089C18.1054 3.20292 18.4799 3.475 18.4946 3.86338L18.6057 6.78783C18.615 7.03089 18.77 7.24433 18.9984 7.32823L21.7453 8.33761C22.1101 8.47166 22.2532 8.91189 22.0368 9.23478L20.4078 11.666C20.2724 11.8681 20.2724 12.1319 20.4078 12.334L22.0368 14.7652C22.2532 15.0881 22.1101 15.5283 21.7453 15.6624L18.9984 16.6718C18.77 16.7557 18.615 16.9691 18.6057 17.2122L18.4946 20.1366C18.4799 20.525 18.1054 20.7971 17.7314 20.6911L14.9158 19.8931C14.6818 19.8267 14.4309 19.9083 14.2805 20.0995L12.4717 22.4001C12.2314 22.7056 11.7686 22.7056 11.5283 22.4001L9.71949 20.0995C9.56915 19.9083 9.31823 19.8267 9.08421 19.8931L6.26856 20.6911C5.89463 20.7971 5.52014 20.525 5.50539 20.1366L5.39427 17.2122C5.38503 16.9691 5.22996 16.7557 5.00164 16.6718L2.25467 15.6624C1.88986 15.5283 1.74682 15.0881 1.96317 14.7652L3.59221 12.334C3.72761 12.1319 3.72761 11.8681 3.59221 11.666L1.96317 9.23478C1.74682 8.91189 1.88986 8.47166 2.25467 8.33761L5.00165 7.32823C5.22996 7.24433 5.38503 7.03089 5.39427 6.78783L5.50539 3.86338C5.52014 3.475 5.89463 3.20292 6.26857 3.3089L9.08421 4.10693C9.31823 4.17325 9.56915 4.09173 9.71949 3.90051L11.5283 1.5999Z"
          stroke="#3e9af1"
          stroke-width="1.5"
        ></path>{" "}
        <path
          d="M9 12L11 14L15 10"
          stroke="#3e9af1"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  ),
  rectangle: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.16 23.246c-1.202 0-1.543.533-1.543 1.707v1.94h3.196l-.314 3.14h-2.882v9.52h-3.824v-9.52H9.2v-3.14h2.58v-1.885c0-3.168 1.27-4.834 4.834-4.834.765 0 1.68.055 2.226.137v2.95m.22 10.352c0 3.537 1.68 6.186 5.176 6.186 1.912 0 3.114-.956 3.646-2.17v1.912h3.674v-12.65h-3.674v1.94c-.56-1.215-1.72-2.212-3.646-2.212-3.5 0-5.176 2.663-5.176 6.186m3.838-.055c0-1.885.696-3.14 2.472-3.14 1.57 0 2.363 1.147 2.363 2.95v1.27c0 1.803-.792 2.95-2.363 2.95-1.775 0-2.472-1.243-2.472-3.14zm16.634-6.132C35.05 26.62 33 29.036 33 32.915v.587c0 3.878 2.048 6.296 6.542 6.296 1.5 0 2.895-.314 3.674-.847l-.847-2.718a6.12 6.12 0 0 1-2.554.587c-2.076 0-2.977-1.202-2.977-3.237v-.737c0-2.048.9-3.237 2.977-3.237 1 0 1.967.287 2.554.587l.847-2.718c-.778-.546-2.185-.86-3.674-.86m4.165 7.074c0 3.715 1.803 6.132 6.637 6.132 1.83 0 3.906-.396 4.916-.93l-.696-2.636c-1.12.478-2.636.765-4.07.765-2.13 0-2.895-.765-2.977-2.5h8.057v-2.02c0-3.5-1.72-5.9-5.654-5.9-4.18 0-6.214 2.363-6.214 5.954V33.7m3.824-1.652c0-1.707.67-2.786 2.4-2.786 1.68 0 2.226 1.093 2.226 2.472v.314H47.53m22.247.765c0-3.537-1.707-6.186-5.203-6.186-1.775 0-3.004.9-3.564 2.02v-8.453l-3.824.34v19h3.62v-1.912c.533 1.215 1.857 2.185 3.77 2.185 3.5 0 5.203-2.663 5.203-6.186m-3.824.055c0 1.775-.696 3.114-2.526 3.114-1.57 0-2.417-1.12-2.417-2.923v-1.325c0-1.803.847-2.923 2.417-2.923 1.83 0 2.526 1.325 2.526 3.114zm5.108-.15c0 3.646 2.076 6.268 6.296 6.268s6.296-2.636 6.296-6.268v-.642c0-3.646-2.076-6.268-6.296-6.268s-6.296 2.636-6.296 6.268v.642m8.768.26c0 1.68-.696 3.004-2.472 3.004s-2.472-1.325-2.472-3.004v-1.174c0-1.68.696-3.004 2.472-3.004s2.472 1.325 2.472 3.004zm5.094-.26c0 3.646 2.076 6.268 6.296 6.268s6.296-2.636 6.296-6.268v-.642c0-3.646-2.076-6.268-6.296-6.268s-6.296 2.636-6.296 6.268v.642m8.78.26c0 1.68-.696 3.004-2.472 3.004s-2.473-1.3-2.473-3v-1.174c0-1.68.696-3.004 2.472-3.004s2.472 1.325 2.472 3.004zm9.082-13.602l-3.824.34V39.5h3.824v-6.186l3.933 6.186h4.07l-4.124-6.4 3.96-6.24h-4.07l-3.77 6.036"
        fill="#3c5a99"
      />
    </svg>
  ),
  github: ({ ...props }: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="discord"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      ></path>
    </svg>
  ),
  discord: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
  logo: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-204.79995 -341.33325 1774.9329 2047.9995"
      {...props}
    >
      <path
        d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
        fill="#1877f2"
      />
      <path
        d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
        fill="#fff"
      />
    </svg>
  ),
};
