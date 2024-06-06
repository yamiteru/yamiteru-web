import type { Component } from "solid-js";
import { Section } from "../components/Section";
import { Experience } from "../components/Experience";
import { Resource } from "../components/Resource";
import { section, setStudy, study } from "../stores/navigation";
import { Switcher } from "../components/Switcher";
import { Card } from "../components/Card";
import { useKeypress } from "../utils/useKeypress";
import { Dynamic } from "solid-js/web";

export const SectionStudy: Component = () => {
	const index = 3;
	const items = ["Education", "Books", "Papers"];
	const components = [StudyEducation, StudyBooks, StudyPapers];

	useKeypress((key) => {
		if (section() === index) {
			const itemIndex = items.findIndex((item) => item[0] === key.slice(3));

			if (itemIndex >= 0) {
				setStudy(itemIndex as any);
			}
		}
	});

	return (
		<Section title="Study" index={index}>
			<Card>
				<Switcher
					items={items}
					index={study()}
					onClick={(index) => setStudy(index as any)}
				/>
			</Card>

			<Dynamic component={components[study()]} />
		</Section>
	);
};

const StudyEducation: Component = () => {
	return (
		<>
			<Experience
				date="2015 - 2018"
				title="Software Engineering"
				company="University of West Bohemia"
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
			</Experience>
			<Experience
				date="2011 - 2015"
				title="Multimedia"
				company="Střední odborná škola obchodu, užitého umění a designu"
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
			</Experience>
		</>
	);
};

const StudyBooks: Component = () => {
	return (
		<>
			<Resource
				author="Samuel Kounev, Klaus-Dieter Lange, Jóakim von Kistowski"
				title="Systems Benchmarking For Scientists and Engineers"
			/>
			<Resource
				author="Charles Wheelan"
				title="Naked Statistics: Stripping the Dread from the Data"
			/>
			<Resource
				author="Stephen Blackheath"
				title="Functional Reactive Programming"
			/>
			<Resource
				author="Thomas Hunter II and Bryan English"
				title="Multithreaded Javascript"
			/>
			<Resource author="JJ Geewax" title="API Design Patterns" />
			<Resource
				author="Jack Dougherty, Ilya Ilyankou"
				title="Hands-On Data Visualization"
			/>
			<Resource
				author="Mark Richards, Neal Ford"
				title="Fundamentals of Software Architecture"
			/>
			<Resource
				author="Titus Winters, Tom Manshreck, Hyrum Wright"
				title="Software Engineering at Google"
			/>
			<Resource
				author="Denise Gosnell, Matthias Broecheler"
				title="The Practitioner's Guide to Graph Data: Applying Graph Thinking and Graph Technologies to Solve Complex Problems"
			/>
			<Resource
				author="Michael J. Hernandez"
				title="Database Design for Mere Mortals"
			/>
			<Resource
				author="Alex Petrov"
				title="Database Internals: A Deep Dive into How Distributed Data Systems Work"
			/>
			<Resource
				author="Michele Bertoli"
				title="React Design Patterns and Best Practices"
			/>
			<Resource
				author="Roy Derks"
				title="React Projects: Build 12 real-world applications from scratch using React, React Native, and React 360"
			/>
			<Resource
				author="Andrea Chiarelli"
				title="Beginning React: Simplify your frontend development workflow and enhance the user experience of your applications with React"
			/>
			<Resource author="Artemij Fedosejev" title="React.js Essentials" />
			<Resource
				author="Ajdin Imsirovic"
				title="Vue.js Quick Start Guide: Learn how to build amazing and complex reactive web applications easily using Vue.js"
			/>
			<Resource
				author="Heitor Ramon Ribeiro"
				title="Vue.js 3 Cookbook: Discover actionable solutions for building modern web apps with the latest Vue features and TypeScript"
			/>
		</>
	);
};

const StudyPapers: Component = () => {
	return (
		<>
			<Resource title="Taming Performance Variability" />
			<Resource title="A Statistics-Based Performance Testing Methodology for Cloud Applications" />
			<Resource title="Applying test case prioritization to software microbenchmarks" />
			<Resource title="A Survey of Methods for Time Series Change Point Detection" />
			<Resource title="Bayesian Online Changepoint Detection" />
			<Resource title="BAYESIAN ONLINE CHANGE POINT DETECTION FOR BASELINE SHIFTS" />
			<Resource title="Conducting Repeatable Experiments in Highly Variable Cloud Computing Environments" />
			<Resource title="Deliberate Microbenchmarking of Software Systems" />
			<Resource title="Evaluation of Inter-Process Communication Mechanisms" />
			<Resource title="Interprocess Communication: Memory mapped files and pipes" />
			<Resource title="Duet Benchmarking: Improving Measurement Accuracy in the Cloud" />
			<Resource title="Investigating Managed Language Runtime Performance: Why JavaScript and Python are 8x and 29x slower than C++, yet Java and Go can be Faster?" />
			<Resource title="Jalangi: A Tool Framework for Concolic Testing, Selective Record-Replay, and Dynamic Analysis of JavaScript" />
			<Resource title="More for Your Money: Exploiting Performance Heterogeneity in Public Clouds" />
			<Resource title="Noise in the Clouds: Influence of Network Performance Variability on Application Scalability" />
			<Resource title="Of JavaScript AOT Compilation Performance" />
			<Resource title="Operating System Noise in the Linux Kernel" />
			<Resource title="Operating System Noise: Linux vs. Microkernel" />
			<Resource title="Overhead of Deoptimization Checks in the V8 JavaScript Engine" />
			<Resource title="Patterns in the Chaos - a Study of Performance Variation and Predictability in Public IaaS Clouds" />
			<Resource title="Performance Analysis with Bayesian Inference" />
			<Resource title="Pilot: A Framework that Understands How to Do Performance Benchmarks the Right Way" />
			<Resource title="Producing Wrong Data Without Doing Anything Obviously Wrong!" />
			<Resource title="Rigorous Benchmarking in Reasonable Time" />
			<Resource title="Robust benchmarking in noisy environments" />
			<Resource title="STABILIZER: Statistically Sound Performance Evaluation" />
			<Resource title="The Good, the Bad, and the Ugly: An Empirical Study of Implicit Type Conversions in JavaScript" />
			<Resource title="The Night Shift: Understanding Performance Variability of Cloud Serverless Platform" />
			<Resource title="Towards Continuous Benchmarking: An Automated Performance Evaluation Framework for High Performance Software" />
			<Resource title="Towards effective assessment of steady state performance in Java software: are we there yet?" />
			<Resource title="Using application benchmark call graphs to quantify and improve the practical relevance of microbenchmark suites" />
			<Resource title="Using Microbenchmark Suites to Detect Application Performance Changes" />
			<Resource title="Virtual Machine Warmup Blows Hot and Cold" />
			<Resource title="WebAssembly versus JavaScript: Energy and Runtime Performance" />
		</>
	);
};
