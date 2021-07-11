import { Component } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-task1';
  faCalendarAlt=faCalendarAlt;
  faHeart=faHeart;
  faRupeeSign=faRupeeSign;
  faCommentDots=faCommentDots;
  faFileAlt=faFileAlt;
  faCreditCard=faCreditCard;
  faSearch= faSearch;
  faSquare=faSquare;
  faIdBadge=faIdBadge;
  faChartLine=faChartLine;
  faAlignCenter=faAlignCenter;
}
