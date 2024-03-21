import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import SelectorBox from '@components/common/SelectorBox';
import DatePicker from '@components/common/DatePicker';
import {
  updateStartDate as reduxUpdateStartDate,
  updateEndDate as reduxUpdateEndDate,
} from '@reducers/filters';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import options from './options';
import useStyles from './useStyles';
import DateRanges from './DateRanges';

const dateFormat = 'YYYY-MM-DD';

function DateSelector({
  range,
  updateStartDate,
  updateEndDate,
}) {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const handleOptionSelect = optionDates => {
    const formattedStart = moment(optionDates[0]).format(dateFormat);
    const formattedEnd = moment(optionDates[1]).format(dateFormat);
    updateStartDate(formattedStart);
    updateEndDate(formattedEnd);
    setExpanded(false);
  };

  const closeOptionsOnDateToggle = useCallback(() => {
    setExpanded(false);
  }, []);

  const { option, selected } = classes;

  return (
    <>
      <span className={classes.label}>
        Date Range&nbsp;
        <Tooltip
          placement="top-end"
          title={
              <div className={`${classes.tooltip} ${classes.trirightbtmleft}`}>
                  <p className={`${classes.boldWord} ${classes.tooltipSentMargin}`}>Currently, 311-Data loads only 311 service request data from 2024 onward.</p>
                  <p className={classes.tooltipSentMargin}>For updates on the release of available 311 Data, please follow our {` `}
                    <a href="https://www.linkedin.com/company/hack-for-la/">
                      LinkedIn Page
                    </a>
                  .
                  </p>                  
              </div>
          }
        >
          <InfoOutlinedIcon className={classes.iconStyle} fontSize="inherit" />
        </Tooltip>
        <Tooltip
        >
            <p>hiiiiiiiii</p>
        </Tooltip>
      </span>
      <SelectorBox onToggle={() => setExpanded(!expanded)} expanded={expanded}>
        <SelectorBox.Display>
          <div className={classes.selector}>
            <DatePicker
              range={range}
              onToggle={closeOptionsOnDateToggle}
            />
            <div className={classes.separator} />
          </div>
        </SelectorBox.Display>
        <SelectorBox.Collapse>
          <DateRanges
            classes={{ option, selected }}
            options={options}
            onSelect={handleOptionSelect}
          />
        </SelectorBox.Collapse>
      </SelectorBox>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  updateStartDate: date => dispatch(reduxUpdateStartDate(date)),
  updateEndDate: date => dispatch(reduxUpdateEndDate(date)),
});

export default connect(null, mapDispatchToProps)(DateSelector);

DateSelector.propTypes = {
  range: PropTypes.bool,
  updateStartDate: PropTypes.func.isRequired,
  updateEndDate: PropTypes.func.isRequired,
};

DateSelector.defaultProps = {
  range: false,
};
