import Link from 'next/link';

const IndexRow = props => (
  <div className="col-sm-12 post_items_wrap">
    <div className="div_news_rows">
      <Link href={`/posts/${props.save_id}`} >
        <a>
          <h3 className="ml-10"> {props.title}</h3>
        </a>
      </Link>        
    </div>
    <div>
      <ul className="ul_time_box">
          <li>
            <p className="mb-0">
                <span className="mr-2 time_icon_wrap">
                  <i className="far fa-calendar"></i>
                </span>
                {props.date} , ID : {props.id} , Category : {props.category_name}
                
            </p>  
          </li>
      </ul>
    </div>    

    <hr className="hr_ex1" />
  </div>
);
export default IndexRow;
