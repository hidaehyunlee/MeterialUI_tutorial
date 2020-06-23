import React from 'react';
import '../HorizontalTimeline.css';

export default function HorizontalTimeline() {
	return (
		<div>
			<section className="timeline">
				<ol>
					<li>
					<div>
						<time>SW 마에스트로</time> At vero eos et accusamus et iusto odio dignissimFos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
					</div>
					</li>
					<li>
					<div>
						<time>우아한 테크 코스</time> Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibFendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.
					</div>
					</li>
					<li>
					<div>
						<time>SSAFY</time> Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
					</div>
					</li>
					<li>
					<div>
						<time>42Seoul 2-1차</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
					</div>
					</li>
					<li>
					<div>
						<time>네이버 부스트캠프</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
					</div>
					</li>
					<li>
					<div>
						<time>42Seoul 2-2차</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
					</div>
					</li>
					<li>
					<div>
						<time>42Seoul 3-1차</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
					</div>
					</li>
					<li>
					<div>
						<time>42Seoul 3-2차</time> Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante.
					</div>
					</li>
					<li></li>
					<li></li>
				</ol>

				<div className="arrows">
					<button className="arrow arrow__prev disabled" disabled>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_prev.svg" alt="prev timeline arrow" />
					</button>
					<button className="arrow arrow__next">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/arrow_next.svg" alt="next timeline arrow" />
					</button>
				</div>
			</section>

		</div>
	);
}
