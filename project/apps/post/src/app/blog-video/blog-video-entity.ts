import { Video } from '@project/shared-types'

export class BlogVideoEntity implements Video {
  public namePublication: string;
  public linkVideo: string;
  public setTag: string[];
  public idAuthorPublication: string;
  public state: string;
  public originolAuthor: string;
  public repost: string;
  public originolId: string;

  constructor(dataVideo: Video) {
    this.fillEntity(dataVideo);
  }

  public toObject() {
    return {
      namePublication: this.namePublication,
      linkVideo: this.linkVideo,
      setTag: this.setTag,
      idAuthorPublication: this.idAuthorPublication,
      state: this.state,
      originolAuthor: this.originolAuthor,
      repost: this.repost,
      originolId: this.originolId
    };
  }

  public fillEntity(dataVideo: Video) {
    this.namePublication = dataVideo.namePublication;
    this.linkVideo = dataVideo.linkVideo;
    this.setTag = dataVideo.setTag;
    this.idAuthorPublication = dataVideo.idAuthorPublication;
    this.state = dataVideo.state;
    this.originolAuthor = '';
    this.repost = '';
    this.originolId = '';
  }

}
