import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
import { Item } from "~/components/Item/Item";
import { Section } from "~/components/Section/Section";
import { Study } from "~/components/Study/Study";
import { Switcher } from "~/components/Switcher/Switcher";

const StudyScreen: Component = () => {
	return (
		<>
			<Study
				from="2015"
				to="2018"
				title="Software Engineering"
				school="University of West Bohemia"
			>
				I have developed a deep understanding of how computers work on a
				fundamental level, encompassing algorithms, data structures, and
				databases. This knowledge has fueled my passion for software
				optimization and benchmarking, leading me to constantly seek ways to
				improve execution speed and resource usage.
				<br />
				<br />
				This low-level expertise has proven invaluable in my role as a web
				developer. Understanding data processing and management at the hardware
				level allows me to make informed decisions about coding practices and
				architectural choices, resulting in cleaner, more efficient code and
				optimized web applications.
				<br />
				<br />
				My knowledge of algorithms and data structures helps me solve complex
				problems strategically, while my database expertise enables me to design
				and manage data storage solutions effectively, optimizing queries and
				ensuring data integrity.
				<br />
				<br />
				Overall, this comprehensive understanding of computer fundamentals has
				equipped me with the skills to excel in web development, bridging the
				gap between low-level computing concepts and high-level application
				development to create robust, high-performing software solutions.
			</Study>

			<Study
				from="2011"
				to="2015"
				title="Multimedia"
				school="Střední odborná škola obchodu, užitého umění a designu"
			>
				I have excelled in graphic design, photography, and web
				design/programming by dedicating most of my time after school to
				learning and honing these skills. Driven by an insatiable hunger for
				knowledge, I began my journey in high school, balancing schoolwork with
				client projects. This provided me with practical experience and taught
				me valuable lessons in time management and client communication.
				<br />
				<br />
				In graphic design, I explored various styles and techniques, creating
				logos and digital artwork that pushed my creativity. Photography allowed
				me to master composition, lighting, and color theory. My passion for web
				design led me to build responsive, user-friendly websites, enhancing my
				front-end and back-end development skills.
				<br />
				<br />
				These experiences have given me a well-rounded perspective, enabling me
				to create visually appealing and technically sound digital products. My
				continuous learning and practical application of skills have laid a
				solid foundation for my professional career, blending creativity with
				technical proficiency.
			</Study>
		</>
	);
};

const BooksScreen: Component = () => {
	return (
		<>
			<Item
				title="Systems Benchmarking For Scientists and Engineers"
				other="Samuel Kounev, Klaus-Dieter Lange, Jóakim von Kistowski"
			/>
			<Item
				title="Naked Statistics: Stripping the Dread from the Data"
				other="Charles Wheelan"
			/>
			<Item
				title="Functional Reactive Programming"
				other="Stephen Blackheath"
			/>
			<Item
				title="Multithreaded Javascript"
				other="Thomas Hunter II and Bryan English"
			/>
			<Item title="API Design Patterns" other="JJ Geewax" />
			<Item
				title="Hands-On Data Visualization"
				other="Jack Dougherty, Ilya Ilyankou"
			/>
			<Item
				title="Fundamentals of Software Architecture"
				other="Mark Richards, Neal Ford"
			/>
			<Item
				title="Software Engineering at Google"
				other="Titus Winters, Tom Manshreck, Hyrum Wright"
			/>
			<Item
				title="The Practitioner's Guide to Graph Data: Applying Graph Thinking and Graph Technologies to Solve Complex Problems"
				other="Denise Gosnell, Matthias Broecheler"
			/>
			<Item
				title="Database Design for Mere Mortals"
				other="Michael J. Hernandez"
			/>
			<Item
				title="Database Internals: A Deep Dive into How Distributed Data Systems Work"
				other="Alex Petrov"
			/>
			<Item
				title="React Design Patterns and Best Practices"
				other="Michele Bertoli"
			/>
			<Item
				title="React Projects: Build 12 real-world applications from scratch using React, React Native, and React 360"
				other="Roy Derks"
			/>
			<Item
				title="Beginning React: Simplify your frontend development workflow and enhance the user experience of your applications with React"
				other="Andrea Chiarelli"
			/>
			<Item title="React.js Essentials" other="Artemij Fedosejev" />
			<Item
				title="Vue.js Quick Start Guide: Learn how to build amazing and complex reactive web applications easily using Vue.js"
				other="Ajdin Imsirovic"
			/>
			<Item
				title="Vue.js 3 Cookbook: Discover actionable solutions for building modern web apps with the latest Vue features and TypeScript"
				other="Heitor Ramon Ribeiro"
			/>
		</>
	);
};

const PapersScreen: Component = () => {
	return (
		<>
			<Item title="Taming Performance Variability" />
			<Item title="A Statistics-Based Performance Testing Methodology for Cloud Applications" />
			<Item title="Applying test case prioritization to software microbenchmarks" />
			<Item title="A Survey of Methods for Time Series Change Point Detection" />
			<Item title="Bayesian Online Changepoint Detection" />
			<Item title="Bayesian Online Changepoint Detection for Baseline Shifts" />
			<Item title="Conducting Repeatable Experiments in Highly Variable Cloud Computing Environments" />
			<Item title="Deliberate Microbenchmarking of Software Systems" />
			<Item title="Evaluation of Inter-Process Communication Mechanisms" />
			<Item title="Interprocess Communication: Memory mapped files and pipes" />
			<Item title="Duet Benchmarking: Improving Measurement Accuracy in the Cloud" />
			<Item title="Investigating Managed Language Runtime Performance: Why JavaScript and Python are 8x and 29x slower than C++, yet Java and Go can be Faster?" />
			<Item title="Jalangi: A Tool Framework for Concolic Testing, Selective Record-Replay, and Dynamic Analysis of JavaScript" />
			<Item title="More for Your Money: Exploiting Performance Heterogeneity in Public Clouds" />
			<Item title="Noise in the Clouds: Influence of Network Performance Variability on Application Scalability" />
			<Item title="Of JavaScript AOT Compilation Performance" />
			<Item title="Operating System Noise in the Linux Kernel" />
			<Item title="Operating System Noise: Linux vs. Microkernel" />
			<Item title="Overhead of Deoptimization Checks in the V8 JavaScript Engine" />
			<Item title="Patterns in the Chaos - a Study of Performance Variation and Predictability in Public IaaS Clouds" />
			<Item title="Performance Analysis with Bayesian Inference" />
			<Item title="Pilot: A Framework that Understands How to Do Performance Benchmarks the Right Way" />
			<Item title="Producing Wrong Data Without Doing Anything Obviously Wrong!" />
			<Item title="Rigorous Benchmarking in Reasonable Time" />
			<Item title="Robust benchmarking in noisy environments" />
			<Item title="Stabilizer: Statistically Sound Performance Evaluation" />
			<Item title="The Good, the Bad, and the Ugly: An Empirical Study of Implicit Type Conversions in JavaScript" />
			<Item title="The Night Shift: Understanding Performance Variability of Cloud Serverless Platform" />
			<Item title="Towards Continuous Benchmarking: An Automated Performance Evaluation Framework for High Performance Software" />
			<Item title="Towards effective assessment of steady state performance in Java software: are we there yet?" />
			<Item title="Using application benchmark call graphs to quantify and improve the practical relevance of microbenchmark suites" />
			<Item title="Using Microbenchmark Suites to Detect Application Performance Changes" />
			<Item title="Virtual Machine Warmup Blows Hot and Cold" />
			<Item title="WebAssembly versus JavaScript: Energy and Runtime Performance" />
		</>
	);
};

const SCREENS = [StudyScreen, BooksScreen, PapersScreen];

export const SectionStudy: Component = () => {
	const [active, setActive] = createSignal(0);

	return (
		<Section title={"Study"} index={3}>
			<Switcher
				items={["Education", "Books", "Papers"]}
				active={active}
				setActive={setActive}
			/>

			<Dynamic component={SCREENS[active()]} />
		</Section>
	);
};
