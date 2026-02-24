import React from 'react';
import dynamic from 'next/dynamic';

const IconMagnifyingGlass = dynamic(
  () => import('@/components/icons/IconMagnifyingGlass'),
);
const IconPlus = dynamic(() => import('@/components/icons/IconPlus'));
const IconFileArrowDown = dynamic(
  () => import('@/components/icons/IconFileArrowDown'),
);
const IconCaretLeft = dynamic(() => import('@/components/icons/IconCaretLeft'));
const IconCaretRight = dynamic(
  () => import('@/components/icons/IconCaretRight'),
);
const IconPencilSimpleLine = dynamic(
  () => import('@/components/icons/IconPencilSimpleLine'),
);
const IconTrashSimple = dynamic(
  () => import('@/components/icons/IconTrashSimple'),
);
const IconDotsThreeVertical = dynamic(
  () => import('@/components/icons/IconDotsThreeVertical'),
);
const IconX = dynamic(() => import('@/components/icons/IconX'));
const IconGearSix = dynamic(() => import('@/components/icons/IconGearSix'));
const IconSignOut = dynamic(() => import('@/components/icons/IconSignOut'));
const IconPieChart = dynamic(() => import('@/components/icons/IconPieChart'));
const IconClipboardText = dynamic(
  () => import('@/components/icons/IconClipboardText'),
);
const IconUserCircleGear = dynamic(
  () => import('@/components/icons/IconUserCircleGear'),
);
const IconSealCheck = dynamic(() => import('@/components/icons/IconSealCheck'));
const IconStar = dynamic(() => import('@/components/icons/IconStar'));
const IconCalendarBlank = dynamic(
  () => import('@/components/icons/IconCalendarBlank'),
);
const IconCurrencyKip = dynamic(
  () => import('@/components/icons/IconCurrencyKip'),
);
const IconArrowLeft = dynamic(() => import('@/components/icons/IconArrowLeft'));
const IconArrowRight = dynamic(
  () => import('@/components/icons/IconArrowRight'),
);
const IconArrowUp = dynamic(() => import('@/components/icons/IconArrowUp'));
const IconArrowDown = dynamic(() => import('@/components/icons/IconArrowDown'));
const IconCheck = dynamic(() => import('@/components/icons/IconCheck'));
const IconLink = dynamic(() => import('@/components/icons/IconLink'));
const IconCopy = dynamic(() => import('@/components/icons/IconCopy'));
const IconHouseLine = dynamic(() => import('@/components/icons/IconHouseLine'));
const IconCaretUp = dynamic(() => import('@/components/icons/IconCaretUp'));
const IconCaretDown = dynamic(() => import('@/components/icons/IconCaretDown'));
const IconInfoLine = dynamic(() => import('@/components/icons/IconInfoLine'));
const IconDrag = dynamic(() => import('@/components/icons/IconDrag'));
const IconAddressBook = dynamic(
  () => import('@/components/icons/IconAddressBook'),
);
const IconArrow4Left = dynamic(
  () => import('@/components/icons/IconArrow4Left'),
);
const IconArrow1Left = dynamic(
  () => import('@/components/icons/IconArrow1Left'),
);
const IconArrow2Right = dynamic(
  () => import('@/components/icons/IconArrow2Right'),
);
const IconArrow3Right = dynamic(
  () => import('@/components/icons/IconArrow3Right'),
);
const IconUser = dynamic(() => import('@/components/icons/IconUser'));
const IconNote = dynamic(() => import('@/components/icons/IconNote'));
const IconPhone = dynamic(() => import('@/components/icons/IconPhone'));
const IconEnvelope = dynamic(() => import('@/components/icons/IconEnvelope'));
const IconRowsPlusBottom = dynamic(
  () => import('@/components/icons/IconRowsPlusBottom'),
);
const IconTagChevron = dynamic(
  () => import('@/components/icons/IconTagChevron'),
);
const IconTimeClock = dynamic(() => import('@/components/icons/IconTimeClock'));
const IconPrice = dynamic(() => import('@/components/icons/IconPrice'));
const IconLockKey = dynamic(() => import('@/components/icons/IconLockKey'));
const IconPause = dynamic(() => import('@/components/icons/IconPause'));
const IconProhibit = dynamic(() => import('@/components/icons/IconProhibit'));
const IconPlay = dynamic(() => import('@/components/icons/IconPlay'));
const IconInfo = dynamic(() => import('@/components/icons/IconInfo'));
const IconCheckFat = dynamic(() => import('@/components/icons/IconCheckFat'));
const IconClose = dynamic(() => import('@/components/icons/IconClose'));
const IconCalendar = dynamic(() => import('@/components/icons/IconCalendar'));
const IconSPXP = dynamic(() => import('@/components/icons/IconSPXP'));
const IconDown = dynamic(() => import('@/components/icons/IconDown'));
const IconWarningCircle = dynamic(
  () => import('@/components/icons/IconWarningCircle'),
);
const IconExcel = dynamic(() => import('@/components/icons/IconExcel'));
const IconXCircle = dynamic(() => import('@/components/icons/IconXCircle'));
const IconUpoint = dynamic(() => import('@/components/icons/IconUpoint'));
const IconDocumentEmpty = dynamic(
  () => import('@/components/icons/IconDocumentEmpty'),
);
const IconVietnam = dynamic(() => import('@/components/icons/IconVietnam'));
const IconEngland = dynamic(() => import('@/components/icons/IconEngland'));
const IconLaos = dynamic(() => import('@/components/icons/IconLaos'));
const IconChina = dynamic(() => import('@/components/icons/IconChina'));

export default function IconGallery(): React.ReactElement {
  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))' }}
    >
      <div className="flex flex-col items-center justify-center">
        <IconMagnifyingGlass />
        <span>IconMagnifyingGlass</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconPlus />
        <span>IconPlus</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconFileArrowDown />
        <span>IconFileArrowDown</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconCaretLeft />
        <span>IconCaretLeft</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconCaretRight />
        <span>IconCaretRight</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconPencilSimpleLine />
        <span>IconPencilSimpleLine</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconTrashSimple />
        <span>IconTrashSimple</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconDotsThreeVertical />
        <span>IconDotsThreeVertical</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconX />
        <span>IconX</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconGearSix />
        <span>IconGearSix</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconSignOut />
        <span>IconSignOut</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconPieChart />
        <span>IconPieChart</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconClipboardText />
        <span>IconClipboardText</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconUserCircleGear />
        <span>IconUserCircleGear</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconSealCheck />
        <span>IconSealCheck</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconStar />
        <span>IconStar</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconCalendarBlank />
        <span>IconCalendarBlank</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconCurrencyKip />
        <span>IconCurrencyKip</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconArrowLeft />
        <span>IconArrowLeft</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconArrowRight />
        <span>IconArrowRight</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconArrowUp />
        <span>IconArrowUp</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconArrowDown />
        <span>IconArrowDown</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconCheck />
        <span>IconCheck</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconLink />
        <span>IconLink</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconCopy />
        <span>IconCopy</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconHouseLine />
        <span>IconHouseLine</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconCaretUp />
        <span>IconCaretUp</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconCaretDown />
        <span>IconCaretDown</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconInfoLine />
        <span>IconInfoLine</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconDrag />
        <span>IconDrag</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconAddressBook />
        <span>IconAddressBook</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconArrow4Left />
        <span>IconArrow4Left</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconArrow1Left />
        <span>IconArrow1Left</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconArrow2Right />
        <span>IconArrow2Right</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconArrow3Right />
        <span>IconArrow3Right</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconUser />
        <span>IconUser</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconNote />
        <span>IconNote</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconPhone />
        <span>IconPhone</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconEnvelope />
        <span>IconEnvelope</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconRowsPlusBottom />
        <span>IconRowsPlusBottom</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconTagChevron />
        <span>IconTagChevron</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconTimeClock />
        <span>IconTimeClock</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconPrice />
        <span>IconPrice</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconLockKey />
        <span>IconLockKey</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconPause />
        <span>IconPause</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconProhibit />
        <span>IconProhibit</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconPlay />
        <span>IconPlay</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconInfo />
        <span>IconInfo</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconCheckFat />
        <span>IconCheckFat</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconClose />
        <span>IconClose</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconCalendar />
        <span>IconCalendar</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconSPXP />
        <span>IconSPXP</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconDown />
        <span>IconDown</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconWarningCircle />
        <span>IconWarningCircle</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconExcel />
        <span>IconExcel</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconXCircle />
        <span>IconXCircle</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconUpoint />
        <span>IconUpoint</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconDocumentEmpty />
        <span>IconDocumentEmpty</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconVietnam />
        <span>IconVietnam</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconEngland />
        <span>IconEngland</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconLaos />
        <span>IconLaos</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <IconChina />
        <span>IconChina</span>
      </div>
    </div>
  );
}
